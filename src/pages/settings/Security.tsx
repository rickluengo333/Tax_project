import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Security() {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const togglePasswordVisibility = (field: string) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field as keyof typeof showPassword],
    });
  };

  return (
    <div className="p-8 max-w-[1400px]">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-2">Security Settings</h2>
        <p className="text-sm text-gray-400">Manage your password and security preferences</p>
      </div>

      <div className="bg-[#f5f5f0] rounded-lg p-8">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPassword.current ? 'text' : 'password'}
                  value={formData.currentPassword}
                  onChange={(e) => handleChange('currentPassword', e.target.value)}
                  placeholder="Enter current password"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('current')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword.new ? 'text' : 'password'}
                  value={formData.newPassword}
                  onChange={(e) => handleChange('newPassword', e.target.value)}
                  placeholder="Enter new password"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('new')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword.confirm ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
            Enable Two-Factor Authentication
          </button>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Sessions</h3>
          <p className="text-sm text-gray-600 mb-6">Manage devices that are currently logged into your account</p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Current Session</h4>
                <p className="text-sm text-gray-600">Chrome on macOS • San Francisco, CA</p>
              </div>
              <span className="text-sm font-medium text-green-600">Active Now</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8">
        <button className="bg-[#b89968] hover:bg-[#a68959] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg transition-colors">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
          </svg>
          Save Changes
        </button>
      </div>
    </div>
  );
}
