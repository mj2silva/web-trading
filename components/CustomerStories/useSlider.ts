import { useCallback, useEffect, useState } from 'react';

type UseSliderProps = {
  auto?: boolean,
  totalPages?: number,
}

const useSlider = ({ auto, totalPages = 0 }: UseSliderProps) => {
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
    if (auto && !timeoutId) {
      const intervalId: number = window.setInterval(() => {
        goNext();
      }, 2000);
      setTimeoutId(intervalId);
    }
  }, [auto, timeoutId, goNext]);

  return {
    currentStep,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  };
};

export default useSlider;
