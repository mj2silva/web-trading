import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

type Props = {
  id: number,
  activeId: number,
  className: string,
  activeClassName: string,
  onClick: (id: number) => void,
}

const CustomerStoriesControl: FC<Props> = (props: Props) => {
  const {
    id, activeId, className, activeClassName, onClick,
  } = props;
  const [isActive, setIsActive] = useState(false);
  const handleClick = (): void => {
    onClick(id);
  };
  useEffect(() => {
    setIsActive(activeId === id);
  }, [activeId, id]);
  const currentClassName = cn(className, { [activeClassName]: isActive });
  return (
    <button
      type="button"
      className={currentClassName}
      onClick={handleClick}
    />
  );
};

export default CustomerStoriesControl;
