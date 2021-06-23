import {
  FC, ReactNode, useEffect, useState,
} from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@styles/Accordion.module.scss';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
  title: string,
  content: ReactNode,
  contentClassName?: string,
  id: number,
  openedId: number,
  openFunction: (id: number) => void,
};

const defaultProps: Partial<Props> = {
  contentClassName: undefined,
};

const AccordionItem: FC<Props> = (props: Props) => {
  const {
    title, content, id, openedId, openFunction, contentClassName,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const itemClassName = cn(styles.AccordionItem, {
    [styles.AccordionItem_collapsed]: !isOpen,
  });
  const listClassName = cn(styles.Accordion_List, contentClassName);
  useEffect(() => {
    setIsOpen(openedId === id);
  }, [openedId, id]);
  const toggleOpen = ():void => {
    if (isOpen) {
      openFunction(-1);
    } else {
      openFunction(id);
    }
  };
  return (
    <div className={itemClassName}>
      <div className={styles.AccordionItem_Head}>
        <div className={styles.AccordionItem_Description}>
          <button onClick={toggleOpen} type="button" className={styles.AccordionItem_Icon}>+</button>
          <h3 className={styles.AccordionItem_Title}>
            { title }
          </h3>
        </div>
        <button onClick={toggleOpen} type="button" className={styles.AccordionItem_Helper}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      <div className={styles.Accordion_Content}>
        { Array.isArray(content)
          ? (
            <ul className={listClassName}>
              { content }
            </ul>
          )
          : (
            <p>
              { content }
            </p>
          )}
      </div>
    </div>
  );
};

AccordionItem.defaultProps = defaultProps;

export default AccordionItem;
