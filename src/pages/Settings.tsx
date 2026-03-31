import { Outlet } from 'react-router-dom';
import SettingsSidebar from '../components/SettingsSidebar';

export default function Settings() {
  return (
    <div className="flex h-screen bg-[#121212] overflow-hidden">
      <SettingsSidebar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
