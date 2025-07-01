import useAppStore from '../../stores/AppStore/useAppStore.ts';
import { CloseButton } from './CloseButton';
import { CollapseButton } from './CollapseButton';
import { sideBarItems } from './config.ts';
import { Item } from './Item';

export const SideBar = () => {
  const { isSideBarFull, isSideBarOpen } = useAppStore();

  return (
    <>
      <aside
        className={`fixed z-40 h-screen ${isSideBarFull ? 'w-60' : 'w-18'} bg-white transition-all ${isSideBarOpen ? 'shadow-right translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-full flex-col justify-between overflow-x-hidden overflow-y-auto pb-4 dark:bg-gray-800">
          <div>
            <CloseButton />
            <div className="py-3">
              {sideBarItems.map(({ icon, id, label, path }) => (
                <Item icon={icon} key={id} label={label} path={path} />
              ))}
            </div>
          </div>
          <CollapseButton />
        </div>
      </aside>
    </>
  );
};
