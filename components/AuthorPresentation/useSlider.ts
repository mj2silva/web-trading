import {
  RefObject, useCallback, useEffect, useState,
} from 'react';

type UseSliderProps = {
  auto?: boolean,
  totalPages?: number,
  ref?: RefObject<HTMLDivElement>,
}

type UseSliderReturn = {
  currentStep: number,
  goToNextPage: () => void,
  goToPreviousPage: () => void,
  goToPage: (id: number) => void,
}

const useSlider = (props: UseSliderProps): UseSliderReturn => {
  const { auto, totalPages = 0, ref } = props;
  const [currentStep, setCurrentStep] = useState(0);
  const [timeoutId, setTimeoutId] = useState<number>();

  const goNext = useCallback(() => {
    setCurrentStep((cs) => {
      if (cs + 1 >= totalPages) return 0;
      return cs + 1;
    });
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setCurrentStep((cs) => {
      if (cs - 1 < 0) return totalPages - 1;
      return cs - 1;
    });
  }, [totalPages]);

  const goToNextPage = (): void => {
    if (auto) {
      clearInterval(timeoutId);
      setTimeoutId(undefined);
    }
    goNext();
  };

  const goToPreviousPage = (): void => {
    if (auto) {
      clearInterval(timeoutId);
      setTimeoutId(undefined);
    }
    goPrev();
  };

  const goToPage = (index: number): void => {
    if (auto) {
      clearInterval(timeoutId);
      setTimeoutId(undefined);
    }
    setCurrentStep(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (!timeoutId) {
          const intervalId: number = window.setInterval(() => {
            goNext();
          }, 2000);
          setTimeoutId(intervalId);
        }
      } else {
        clearInterval(timeoutId);
        setTimeoutId(undefined);
      }
    }, { threshold: 0.25 });
    const currentRef = ref?.current;
    if (auto) {
      if (currentRef) observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        clearInterval(timeoutId);
      }
    };
  }, [auto, goNext, ref, timeoutId]);

  return {
    currentStep,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  };
};

export default useSlider;
