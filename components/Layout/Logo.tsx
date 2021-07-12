import { FC } from 'react';
import cn from 'classnames';
import logoStyles from '@styles/Logo.module.scss';
import Link from 'next/link';

type Props = {
  className?: string,
  color?: 'black' | 'white',
}

const defaultProps: Partial<Props> = {
  className: '',
  color: 'white',
};

const Logo: FC<Props> = ({ className, color }: Props) => {
  const logoClassName = cn(logoStyles.Logo, {
    [logoStyles.Logo_black]: color === 'black',
  }, className);
  return (
    <Link href="/">
      <a className={logoClassName}>
        <div className={logoStyles.Logo_Image}>
          <img className="image" src="/img/logo.png" alt="Logo trading para ti" />
        </div>
        <div className={logoStyles.Logo_BrandName}>
          TRADING PARA TI
        </div>
      </a>
    </Link>
  );
};

Logo.defaultProps = defaultProps;

export default Logo;
