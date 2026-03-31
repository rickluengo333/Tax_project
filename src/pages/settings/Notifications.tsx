import { useState } from 'react';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

export default function Notifications() {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: 'email-updates',
      title: 'Email Updates',
      description: 'Receive general email updates about your account',
      enabled: true,
    },
    {
      id: 'document-requests',
      title: 'Document Requests',
      description: 'Get notified when your preparer requests documents',
      enabled: true,
    },
    {
      id: 'status-changes',
      title: 'Status Changes',
      description: 'Updates when your tax return status changes',
      enabled: true,
    },
    {
      id: 'preparer-messages',
      title: 'Preparer Messages',
      description: 'Get notified when your preparer sends you a message',
      enabled: true,
    },
    {
      id: 'weekly-digest',
      title: 'Weekly Digest',
      description: 'Receive a weekly summary of activity',
      enabled: false,
    },
    {
      id: 'marketing-emails',
      title: 'Marketing Emails',
      description: 'Receive promotional and marketing emails',
      enabled: false,
    },
  ]);

  const toggleSetting = (id: string) => {
    setSettings(
      settings.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  return (
    <div className="p-8 max-w-[1400px]">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-2">Notification Preferences</h2>
        <p className="text-sm text-gray-400">Choose how you want to be notified about updates</p>
      </div>

      <div className="bg-[#f5f5f0] rounded-lg p-8">
        <div className="space-y-4">
          {settings.map((setting) => (
            <div
              key={setting.id}
              className="flex items-center justify-between py-4 border-b border-gray-300 last:border-0"
            >
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{setting.title}</h3>
                <p className="text-sm text-gray-600">{setting.description}</p>
              </div>
              <button
                onClick={() => toggleSetting(setting.id)}
                className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  setting.enabled ? 'bg-[#b89968]' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    setting.enabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
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
