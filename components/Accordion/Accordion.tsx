import styles from '@styles/Accordion.module.scss';
import cn from 'classnames';
import { FC, ReactNode, useState } from 'react';
import AccordionItem from './AccordionItem';

type AccordionListProps = {
  contentClassName?: string,
  content: {
    title: string,
    content: ReactNode | ReactNode[],
  }[],
  handleOpen: (id: number) => void,
  openedId: number,
  columns?: number,
}

const accordionItemDefaultProps = {
  contentClassName: undefined,
  columns: 1,
};

const AccordionItemWithListContainer: FC<AccordionListProps> = ({
  content, openedId, handleOpen, contentClassName, columns,
}: AccordionListProps) => {
  const columnLength = content.length / (columns || 1);
  const firstColumnItems: ReactNode[] = [];
  const secondColumnItems: ReactNode[] = [];
  content.forEach((item, index) => {
    const reactItem = (
      <AccordionItem
        id={index}
        openedId={openedId}
        openFunction={handleOpen}
        key={`acc-item-ben-${index + 1}`}
        content={item.content}
        title={item.title}
        contentClassName={contentClassName}
      />
    );
    if (index < columnLength) {
      firstColumnItems.push(reactItem);
    } else {
      secondColumnItems.push(reactItem);
    }
  });
  return (
    <>
      <div className={styles.Accordion_Column}>
        { firstColumnItems }
      </div>
      {
        secondColumnItems.length > 0
        && (
          <div className={styles.Accordion_Column}>
            { secondColumnItems }
          </div>
        )
      }
    </>
  );
};

AccordionItemWithListContainer.defaultProps = accordionItemDefaultProps;

type Props = {
  className?: string,
  contentClassName?: string,
  type?: 'normal' | 'with-list' | 'list-one-column',
  content: {
    title: string,
    content: ReactNode,
  }[]
}

const defaultProps: Partial<Props> = {
  className: undefined,
  contentClassName: undefined,
  type: 'normal',
};

const Accordion: FC<Props> = (props: Props) => {
  const {
    className, type, content, contentClassName,
  } = props;
  const accordionClassName = cn(
    styles.Accordion, {
      [styles.Accordion_withList]: type === 'with-list',
      [styles.Accordion_listOneColumn]: type === 'list-one-column',
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
        type === 'with-list' || type === 'list-one-column'
          ? (
            <AccordionItemWithListContainer
              contentClassName={contentClassName}
              handleOpen={handleOpen}
              openedId={openedId}
              content={content}
              columns={type === 'with-list' ? 2 : 1}
            />
          )
          : content.map((item, index) => (
            <AccordionItem
              id={index}
              openedId={openedId}
              openFunction={handleOpen}
              key={`acc-item-ben-${index + 1}`}
              content={item.content}
              title={item.title}
              contentClassName={contentClassName}
            />
          ))
      }
    </div>
  );
};

Accordion.defaultProps = defaultProps;

export default Accordion;
