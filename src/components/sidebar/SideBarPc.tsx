'use client';

import '@styles/sidebar/pc.css';
import SiteMap from '@lib/sitemap';

function LinkList() {
  return (
    <div className="link-wrapper">
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
  );
}

function SideBarPc() {
  return (
    <div className="header-items-container">
      <div className="header-items left" style= {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <span className="title-font">
          BDEV.IO
        </span>
      </div>
      <div className="header-items right">
        <LinkList />
      </div>
    </div>
  );
}

export default SideBarPc;
