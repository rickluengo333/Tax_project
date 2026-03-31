import { NavLink, useNavigate } from 'react-router-dom';
import { Building2, User, Bell, Shield, FileText, Menu, Bell as BellIcon, LogOut } from 'lucide-react';

export default function SettingsSidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { path: '/settings/company', label: 'Company Information', icon: Building2 },
    { path: '/settings/user', label: 'User Settings', icon: User },
    { path: '/settings/notifications', label: 'Notifications', icon: Bell },
    { path: '/settings/security', label: 'Security', icon: Shield },
    { path: '/settings/legal', label: 'Legal', icon: FileText },
  ];

  return (
    <div className="w-[400px] bg-[#0a0a0a] border-r border-gray-800 flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#c4a053] to-[#8b7038] flex items-center justify-center">
              <div className="text-white font-bold text-xs">S</div>
            </div>
            <span className="text-white text-sm font-semibold">SOVEREIGN</span>
          </div>
          <button className="p-2 hover:bg-gray-800 rounded transition-colors">
            <Menu size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-1">
            Acme Corp • 2025 Tax Year • <span className="text-white font-medium">Settings</span>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold text-white mb-2">Settings</h1>
          <p className="text-sm text-gray-400">Manage your account and company information</p>
        </div>
      </div>

      <nav className="flex-1 py-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                isActive
                  ? 'bg-[#b89968] text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
              }`
            }
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-gray-800 p-4">
        <button
          onClick={() => navigate('/status-tracker')}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors mb-2"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Back to Portal</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-gray-900 rounded-lg transition-colors">
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>

      <div className="absolute top-6 right-6">
        <button className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <BellIcon size={20} className="text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#d97706] rounded-full"></span>
        </button>
      </div>
    </div>
  );
}
