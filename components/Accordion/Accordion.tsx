import styles from '@styles/Accordion.module.scss';
import cn from 'classnames';
import { FC, ReactNode, useState } from 'react';
import AccordionItem from './AccordionItem';

type Props = {
  className?: string,
  type?: 'normal' | 'with-list' | 'list-one-column',
  content: {
    title: string,
    content: ReactNode,
  }[]
}

const defaultProps: Partial<Props> = {
  className: undefined,
  type: 'normal',
};

const Accordion: FC<Props> = (props: Props) => {
  const { className, type, content } = props;
  const accordionClassName = cn(
    styles.Accordion, {
      [styles.Accordion_withList]: type === 'with-list',
      [styles.Accordion_listOneColumne]: type === 'list-one-column',
    },
    className,
  );
  const [openedId, setOpenedId] = useState(0);
  const handleOpen = (id: number): void => {
    setOpenedId(id);
  };
  return (
    <div className={accordionClassName}>
      {
        content.map((item, index) => (
          <AccordionItem
            id={index}
            openedId={openedId}
            openFunction={handleOpen}
            key={`acc-item-ben-${index + 1}`}
            content={item.content}
            title={item.title}
          />
        ))
      }
    </div>
  );
};

Accordion.defaultProps = defaultProps;

export default Accordion;
