import { useState } from 'react';
import { ChevronDown, ChevronRight, MessageSquare, CheckCircle, DollarSign } from 'lucide-react';

interface InsightItem {
  id: string;
  title: string;
  value: string;
  deadline?: string;
  description?: string;
  basedOn?: string;
  actions?: string[];
}

export default function Compliance() {
  const [expandedInsight, setExpandedInsight] = useState<string | null>(null);

  const insights: InsightItem[] = [
    {
      id: 'compliance-1',
      title: 'Estimated Tax Payment Planning',
      value: 'Penalty avoided: up to $8,000',
      deadline: 'April 15, 2026',
    },
  ];

  const toggleInsight = (id: string) => {
    setExpandedInsight(expandedInsight === id ? null : id);
  };

  return (
    <div className="p-8 max-w-7xl">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-4">
          Acme Corp • 2025 Tax Year <span className="font-semibold text-white">Insights</span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <DollarSign size={32} className="text-[#b89968]" />
          <h1 className="text-3xl font-semibold">Compliance</h1>
        </div>
        <p className="text-gray-400">
          Compliance requirements and important deadlines for your 2025 return.
        </p>
      </div>

      <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 mb-6">
        <div className="text-sm text-gray-300">
          <span className="font-semibold text-white">1 insight identified</span>{' '}
          <span className="text-gray-500">• Compliance</span>{' '}
          <span className="text-[#10b981] font-medium">Penalty savings: up to $8,000</span>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => {
          const isExpanded = expandedInsight === insight.id;

          return (
            <div
              key={insight.id}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors"
            >
              <button
                onClick={() => toggleInsight(insight.id)}
                className="w-full p-5 flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 bg-[#242424] rounded-lg flex items-center justify-center text-[#b89968] flex-shrink-0">
                  <DollarSign size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-white">{insight.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400">Compliance</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-[#10b981] font-medium">{insight.value}</span>
                    {insight.deadline && (
                      <>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">{insight.deadline}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {isExpanded ? (
                    <ChevronDown size={20} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={20} className="text-gray-400" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5">
                  <div className="border-t border-gray-800 pt-5">
                    <p className="text-sm text-gray-300 leading-relaxed mb-5">
                      Ensure timely estimated tax payments to avoid penalties. Review your quarterly payment obligations and payment dates.
                    </p>

                    <div className="bg-[#121212] border border-gray-700 rounded-lg p-3 mb-5">
                      <span className="text-sm text-gray-400">Based on 2025 income projections and tax bracket</span>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-white mb-3">Recommended Actions</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-gray-600 mt-0.5">•</span>
                          <span>Calculate estimated tax liability for current year</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-gray-600 mt-0.5">•</span>
                          <span>Schedule quarterly payment dates in your calendar</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-gray-600 mt-0.5">•</span>
                          <span>Set up automatic payments to avoid missed deadlines</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-gray-700 px-4 py-2 rounded-lg transition-colors">
                        <MessageSquare size={16} />
                        Discuss with your preparer
                        <ChevronRight size={14} />
                      </button>
                      <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-gray-700 px-4 py-2 rounded-lg transition-colors">
                        <CheckCircle size={16} />
                        Mark as actioned
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
