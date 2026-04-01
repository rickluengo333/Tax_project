interface LegalDocument {
  title: string;
  description: string;
}

export default function Legal() {
  const documents: LegalDocument[] = [
    {
      title: 'Privacy Policy',
      description: 'Learn how we collect, use, and protect your personal information',
    },
    {
      title: 'Terms of Service',
      description: 'Read the terms and conditions for using Sovereign Tax UI',
    },
    {
      title: 'End User License Agreement (EULA)',
      description: 'Review the software license agreement for Sovereign Tax UI',
    },
    {
      title: 'Data Processing Agreement (DPA)',
      description: 'Understand how we process and safeguard your tax data',
    },
    {
      title: 'Cookie Policy',
      description: 'Learn about our use of cookies and tracking technologies',
    },
    {
      title: 'Acceptable Use Policy',
      description: 'Guidelines for appropriate use of Sovereign Tax UI services',
    },
  ];

  return (
    <div className="p-8 max-w-[1400px]">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-2">Legal Information</h2>
        <p className="text-sm text-gray-400">Access legal documents and agreements</p>
      </div>

      <div className="bg-[#f5f5f0] rounded-lg p-8">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Documents</h3>
          <p className="text-sm text-gray-600 mb-6">
            Review our legal documents and agreements that govern your use of Sovereign Tax UI.
          </p>

          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{doc.title}</h4>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                </div>
                <button className="px-4 py-2 bg-[#b89968] hover:bg-[#a68959] text-white rounded-lg text-sm font-medium transition-colors flex-shrink-0">
                  View Document
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
