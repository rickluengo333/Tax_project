import { useState } from 'react';
import { AlertCircle, Lock } from 'lucide-react';

export default function CompanyInformation() {
  const [formData, setFormData] = useState({
    companyName: 'Acme Corporation',
    legalName: 'Acme Corporation LLC',
    ein: '12-3456789',
    entityType: '',
    fiscalYearEnd: '12/31',
    stateOfFormation: 'Delaware',
    filingJurisdictions: 'Federal, California, Delaware, New York, Texas, Nevada',
    address: '123 Business Street',
    city: 'San Francisco',
    state: 'California',
    zipCode: '94105',
    phone: '(555) 123-4567',
    email: 'contact@acmecorp.com',
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="p-8 max-w-[1400px]">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-2">Company Information</h2>
        <p className="text-sm text-gray-400">Update your company details and contact information</p>
      </div>

      <div className="bg-[#f5f5f0] rounded-lg p-8">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Basic Information</h3>
          <div className="flex items-start gap-2 mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <AlertCircle size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-orange-900">
              Changes to EIN, Legal Name, or Entity Type may require tax re-review by your preparer
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              Legal Name
              <Lock size={14} className="text-gray-400" />
            </label>
            <input
              type="text"
              value={formData.legalName}
              onChange={(e) => handleChange('legalName', e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              EIN
              <Lock size={14} className="text-gray-400" />
            </label>
            <input
              type="text"
              value={formData.ein}
              onChange={(e) => handleChange('ein', e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              Entity Type
              <Lock size={14} className="text-gray-400" />
            </label>
            <input
              type="text"
              value={formData.entityType}
              onChange={(e) => handleChange('entityType', e.target.value)}
              placeholder="C-Corporation"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fiscal Year End
            </label>
            <input
              type="text"
              value={formData.fiscalYearEnd}
              onChange={(e) => handleChange('fiscalYearEnd', e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State of Formation
            </label>
            <input
              type="text"
              value={formData.stateOfFormation}
              onChange={(e) => handleChange('stateOfFormation', e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filing Jurisdictions</h3>
          <p className="text-sm text-gray-600 mb-3">States where your entity files tax returns</p>
          <input
            type="text"
            value={formData.filingJurisdictions}
            onChange={(e) => handleChange('filingJurisdictions', e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => handleChange('state', e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleChange('zipCode', e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b89968] focus:border-transparent"
              />
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
