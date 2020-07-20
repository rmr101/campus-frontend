import React from 'react';
import styles from './Layout.module.scss';
import Nav from '../Nav';
import Main from "../Main";

export const Hamburger = ({ showNav, setShowNav }) => (
  <div className={showNav ? styles.mask : null}>
    <div
      data-testid="hamburger"
      className={`${styles.hamburger} ${!showNav?styles.hamburgerInactive:styles.hamburgerActive}`}
      onClick={(e) => {
        e.preventDefault();
        setShowNav(!showNav);
      }}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    {showNav ? (
      <RenderLayout>
        <div data-testid="nav" className={styles.nav}>
          <Nav noAvatar/>
        </div>
      </RenderLayout>
    ) : null}
  </div>
);

export const RenderLayout = ({children}) => (
    <React.Fragment>
      {children}
      <div className={styles.main}>
        <Main />
      </div>
    </React.Fragment>
);

export default () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [showNav, setShowNav] = React.useState(false);
  const breakpoint = 1200;
  
  React.useEffect(() => { window.addEventListener("resize", () => setWidth(window.innerWidth)); }, []);
  return width < breakpoint ? (
    <RenderLayout>
      <Hamburger showNav={showNav} setShowNav={setShowNav} />
    </RenderLayout>
  ) : (
    <RenderLayout>
      <div className={styles.nav}>
        <Nav />
      </div>
    </RenderLayout>
  );
}
