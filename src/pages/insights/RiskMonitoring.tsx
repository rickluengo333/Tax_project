import { useState } from 'react';
import { ChevronDown, ChevronRight, MessageSquare, CheckCircle, AlertTriangle } from 'lucide-react';

interface InsightItem {
  id: string;
  title: string;
  value: string;
  description: string;
  basedOn: string;
  actions: string[];
}

export default function RiskMonitoring() {
  const [expandedInsight, setExpandedInsight] = useState<string | null>(null);

  const insights: InsightItem[] = [
    {
      id: 'risk-1',
      title: 'Interest Expense Limitation Monitoring',
      value: 'Potential exposure: $20,000 - $40,000',
      description:
        'Your net interest expense may be subject to limitations under IRC Section 163(j). Monitor your interest-to-asset ratio to ensure compliance and identify planning opportunities.',
      basedOn: 'Based on Form 1120 — Line 15 · Interest paid: $180,000',
      actions: [
        'Track interest expense and taxable income ratio',
        'Review borrowing arrangements for optimization opportunities',
        'Document interest expense allocation across tax jurisdictions',
      ],
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
          <AlertTriangle size={32} className="text-[#b89968]" />
          <h1 className="text-3xl font-semibold">Risk & Monitoring</h1>
        </div>
        <p className="text-gray-400">
          Areas to monitor and potential risks identified by your tax team for your 2025 return.
        </p>
      </div>

      <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 mb-6">
        <div className="text-sm text-gray-300">
          <span className="font-semibold text-white">1 insight identified</span>{' '}
          <span className="text-gray-500">• Risk & Monitoring</span>{' '}
          <span className="text-[#f59e0b] font-medium">Potential exposure: $20,000-$40,000</span>
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
                  <AlertTriangle size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-white">{insight.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400">Risk & Monitoring</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-[#f59e0b] font-medium">{insight.value}</span>
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
                      {insight.description}
                    </p>

                    <div className="bg-[#121212] border border-gray-700 rounded-lg p-3 mb-5">
                      <span className="text-sm text-gray-400">{insight.basedOn}</span>
                    </div>

                    {insight.actions && insight.actions.length > 0 && (
                      <div className="mb-5">
                        <h4 className="text-sm font-semibold text-white mb-3">Recommended Actions</h4>
                        <ul className="space-y-2">
                          {insight.actions.map((action, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="text-gray-600 mt-0.5">•</span>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

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
