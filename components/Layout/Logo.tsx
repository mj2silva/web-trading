import { FC } from 'react';
import cn from 'classnames';
import logoStyles from '../../styles/Logo.module.scss';

type Props = {
  className?: string,
}

const defaultProps: Partial<Props> = {
  className: '',
};

const Logo: FC<Props> = ({ className }: Props) => (
  <div className={cn(logoStyles.Logo, className)}>
    <div className={logoStyles.Logo_Image}>
      <img className="image" src="/img/logo.png" alt="Logo trading para ti" />
    </div>
    <div className={logoStyles.Logo_BrandName}>
      TRADING PARA TI
    </div>
  </div>
);

Logo.defaultProps = defaultProps;

export default Logo;
