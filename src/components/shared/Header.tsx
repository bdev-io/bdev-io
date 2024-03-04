'use client';

import config from '@/lib/config';
import SideBarPC from '@/components/sidebar/SideBarPc';
import SideBarMobile from '@components/sidebar/SideBarMobile';

import { IMenuContext, MobileChecker, globalState } from '@/context/sidebar';
import { useSnapshot } from 'valtio';
import './Header.css';

function LogoIcon() {
  return (
    <div className="logo-container">
      <div className="logo-image">
        <a className="site-title" rel="author" href="/">
          <picture>
            <source srcSet="/assets/images/logo.png" type="image/png" />
            <img src="/assets/images/logo.png" alt={config.siteTitle} />
          </picture>
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const { isMobile } = useSnapshot<IMenuContext>(globalState);

  return (
    <div className="header-wrapper">
      <MobileChecker />
      <LogoIcon />
      {isMobile ? (
        <SideBarMobile />
      ) : (
        <SideBarPC />
      )}
    </div>
  );
}
