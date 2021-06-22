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
  id: number,
  openedId: number,
  openFunction: (id: number) => void,
}

const AccordionItem: FC<Props> = (props: Props) => {
  const {
    title, content, id, openedId, openFunction,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const itemClassName = cn(styles.AccordionItem, {
    [styles.AccordionItem_collapsed]: !isOpen,
  });
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
        <p>
          { content }
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
