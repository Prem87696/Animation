import { BarChart3, Download, Eye, Heart, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-neutral-900">Dashboard</h1>
        <p className="text-neutral-500 mt-2">Track your animation performance and earnings.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Views', value: '124.5k', change: '+12.5%', icon: Eye, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Downloads', value: '48.2k', change: '+8.2%', icon: Download, color: 'text-indigo-500', bg: 'bg-indigo-50' },
          { label: 'Likes', value: '12.4k', change: '+15.3%', icon: Heart, color: 'text-pink-500', bg: 'bg-pink-50' },
          { label: 'Earnings', value: '$3,240', change: '+24.5%', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-neutral-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold text-neutral-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Area (Placeholder) */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-neutral-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-neutral-900">Performance Overview</h3>
            <select className="bg-neutral-50 border border-neutral-200 text-sm rounded-lg px-3 py-1.5 outline-none">
              <option>Last 30 Days</option>
              <option>This Year</option>
              <option>All Time</option>
            </select>
          </div>
          <div className="h-72 flex items-center justify-center bg-neutral-50 rounded-2xl border border-neutral-100 border-dashed">
            <div className="text-center text-neutral-400">
              <BarChart3 className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Chart visualization goes here</p>
            </div>
          </div>
        </div>

        {/* Recent Uploads */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-neutral-900">Recent Uploads</h3>
            <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View All</button>
          </div>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-neutral-100">
                <div className="w-16 h-12 bg-neutral-100 rounded-xl overflow-hidden shrink-0">
                  <img src={`https://picsum.photos/seed/dash${i}/100/100?blur=2`} alt="Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-neutral-900 truncate">Loading Animation {i + 1}</h4>
                  <div className="flex items-center gap-3 mt-1 text-xs text-neutral-500">
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> 1.2k</span>
                    <span className="flex items-center gap-1"><Download className="w-3 h-3" /> 340</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
