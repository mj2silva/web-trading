import Link, { LinkProps } from 'next/link';
import { FC, ReactNode } from 'react';
import styles from '@styles/ConfigLayout.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode,
}

type ConfigLinkProps = LinkProps & {
  className: string,
  activeClassName: string,
  children: ReactNode,
}

const ConfigLink: FC<ConfigLinkProps> = (props: ConfigLinkProps) => {
  const {
    className, activeClassName, href, children,
  } = props;
  const router = useRouter();
  const linkClassName = cn(className, {
    [activeClassName]: router.asPath === href,
  });
  return (
    <Link href={href}>
      <a className={linkClassName}>{children}</a>
    </Link>
  );
};

const ConfigLayout: FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <main className={styles.ConfigLayout}>
      <nav className={styles.ConfigLayout_Nav}>
        <ConfigLink
          className={styles.ConfigLayout_Link}
          activeClassName={styles.ConfigLayout_Link_active}
          href="/curso/configuracion/perfil"
        >
          Perfil
        </ConfigLink>
        <ConfigLink
          className={styles.ConfigLayout_Link}
          activeClassName={styles.ConfigLayout_Link_active}
          href="/curso/configuracion/seguridad"
        >
          Seguridad
        </ConfigLink>
      </nav>
      <div className={styles.ConfigLayout_Body}>
        { children }
      </div>
    </main>
  );
};

export default ConfigLayout;
