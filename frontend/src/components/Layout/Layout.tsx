import { Outlet } from 'react-router-dom';

import useAppStore from '../../stores/AppStore/useAppStore.ts';
import { Header } from '../Heder';
import { SideBar } from '../SideBar';

export const Layout = () => {
  const { isSideBarFull, isSideBarOpen } = useAppStore();

  return (
    <>
      <SideBar />

      <div
        className={`transition-all ${isSideBarOpen ? (isSideBarFull ? 'pl-60' : 'pl-18') : 'pl-0'}`}
      >
        <Header />
        <Outlet />
      </div>
    </>
  );
};
