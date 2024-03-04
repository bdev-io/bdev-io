'use client';

import React from 'react';
import { IMenuContext, globalState } from '@context/sidebar';
import { Divide as Hamburger } from 'hamburger-react';
import { useSnapshot } from 'valtio';

import '@styles/sidebar/mobile.css';
import SiteMap from '@lib/sitemap';

// const sideBarStyle = {
//   default: {
//     display: 'none',
//   },
//
//   open: {
//     display: 'block',
//   },
// };

export default function SideBarMobile() {
  const { isOpen } = useSnapshot<IMenuContext>(globalState);

  const toggleMenu = () => {
    globalState.isOpen = !isOpen;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggle = (toggled: boolean) => {
    toggleMenu();
  };

  return (
    <div style={{
      width: '100%',
    }}>
      <div className="mobile-header-items-container">
        <div className="mobile-header-items left" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <span className="title-font">
            BDEV.IO
          </span>
        </div>
        <div className="mobile-header-items right">
          <Hamburger direction="right" toggle={toggleMenu} toggled={isOpen} onToggle={onToggle} label="Show menu" />
        </div>
      </div>
      <div className="mobile-sidebar-container" style={{
        display: isOpen ? 'block' : 'none',
      }}>
        <div className="mobile-sidebar mlink-wrapper">
            <ul>
            {
              Object.keys(SiteMap).map((key) => (
                <li key={key}>
                  <a href={SiteMap[key].path}>
                    {SiteMap[key].title}
                  </a>
                </li>
              ))
            }
            </ul>
        </div>
      </div>

    </div>
  );
}
