'use client';

import { useEffect } from 'react';
import { proxy } from 'valtio';

export interface IMenuContext {
  isMobile: boolean;
  isOpen: boolean;
}

const initialMenuState: IMenuContext = {
  isMobile: false,
  isOpen: false,
};

const globalState = proxy<IMenuContext>(initialMenuState);

const MobileChecker = () => {
  const handleResize = () => {
    globalState.isMobile = window.innerWidth < 800;
  };
  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize); // 창 크기가 변경될 때마다 호출하여 모바일 여부를 갱신합니다.
    return () => {
      window.removeEventListener('resize', handleResize); // 컴포넌트가 언마운트될 때 리스너를 제거합니다.
    };
  });

  return <></>;
};

export {
  globalState,
  MobileChecker,
};
