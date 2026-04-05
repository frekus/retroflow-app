export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📊</span>
          <span className="font-bold text-xl tracking-tight">RetroFlow</span>
        </div>
        <a
          href="#how-it-works"
          className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          See How It Works
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span>⚡</span> Fires every Monday at 8:00 AM
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Your Monday morning<br />
          <span className="text-amber-500">business health report</span>,<br />
          automated.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          RetroFlow reads your Google Sheets metrics every Monday and posts a colour-coded 🟢🟡🔴 digest to Slack — before your team opens their laptops.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#how-it-works"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
          <a
            href="#features"
            className="border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            View Features
          </a>
        </div>

        {/* MOCK SLACK MESSAGE */}
        <div className="mt-16 bg-gray-950 rounded-2xl p-6 text-left max-w-lg mx-auto shadow-2xl">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">R</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">RetroFlow</span>
                <span className="bg-gray-700 text-gray-300 text-xs px-1.5 py-0.5 rounded">APP</span>
                <span className="text-gray-500 text-xs">8:00 AM</span>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 space-y-3">
                <p className="text-white font-bold text-base">📊 Weekly Business Health — Monday, 24 March 2026</p>
                <div className="border-t border-gray-700 pt-3 space-y-1.5">
                  <p className="text-gray-300 text-sm font-semibold">All Good (3)</p>
                  <p className="text-green-400 text-sm">🟢 <span className="text-white">Monthly Revenue:</span> $12,500</p>
                  <p className="text-green-400 text-sm">🟢 <span className="text-white">Active Clients:</span> 14</p>
                  <p className="text-green-400 text-sm">🟢 <span className="text-white">Calls Booked:</span> 8</p>
                </div>
                <div className="border-t border-gray-700 pt-3 space-y-1.5">
                  <p className="text-gray-300 text-sm font-semibold">Requires Attention (2)</p>
                  <p className="text-yellow-400 text-sm">🟡 <span className="text-white">Outstanding AR:</span> $2,800 <span className="text-gray-500">(target: $1,000)</span></p>
                  <p className="text-red-400 text-sm">🔴 <span className="text-white">Tasks Overdue:</span> 12 <span className="text-gray-500">(target: 0)</span></p>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <p className="text-gray-400 text-xs">📋 New leads this week: 3 · <span className="text-amber-400 underline cursor-pointer">Update your metrics</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-amber-50 border-y border-amber-100 py-14">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: '0 min', label: 'Manual effort each Monday' },
            { value: '8:00 AM', label: 'Digest in Slack before standup' },
            { value: '6', label: 'Metrics tracked out of the box' },
            { value: '1 sheet', label: 'Single source of truth' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-amber-600">{s.value}</p>
              <p className="text-sm text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-amber-600 font-semibold text-sm text-center uppercase tracking-widest mb-4">Features</p>
        <h2 className="text-4xl font-extrabold text-center mb-4">
          The Monday morning briefing<br />your team actually reads
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-16">
          RetroFlow replaces the spreadsheet-checking, copy-pasting, and Slack-posting that eats the first 20 minutes of every week.
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              icon: '🟢',
              title: 'Colour-coded health scoring',
              desc: 'Every metric is automatically tagged 🟢 green, 🟡 amber, or 🔴 red based on status values in your sheet. The team sees what needs attention instantly.',
            },
            {
              icon: '📊',
              title: 'Google Sheets as your source',
              desc: 'Update one cell in your Business Dashboard sheet and the next Monday digest reflects it. No dashboards, no logins, no new tools.',
            },
            {
              icon: '🔔',
              title: 'Slack delivery at 8:00 AM',
              desc: 'The digest arrives in your chosen Slack channel before the working day begins. Fully formatted with sections, dividers, and a live link back to your sheet.',
            },
            {
              icon: '📋',
              title: 'Live lead count from intake',
              desc: 'RetroFlow reads your Lead Tracker sheet and appends the new-leads-this-week count to every digest — no extra work required.',
            },
            {
              icon: '⚠️',
              title: 'Built-in error alerting',
              desc: 'If anything breaks — wrong sheet ID, bad credentials, network failure — a fallback Slack message fires immediately so nothing silently fails.',
            },
            {
              icon: '⚡',
              title: 'Zero maintenance once live',
              desc: 'Runs on n8n Cloud. No servers, no cron jobs, no scripts. Activate it once and it runs every Monday morning for as long as you need it.',
            },
          ].map((f) => (
            <div key={f.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-gray-950 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-amber-400 font-semibold text-sm text-center uppercase tracking-widest mb-4">How It Works</p>
          <h2 className="text-4xl font-extrabold text-white text-center mb-4">
            7 nodes. Fully automated.
          </h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
            RetroFlow runs as a single n8n workflow. Every step is visible, editable, and yours.
          </p>
          <div className="space-y-4">
            {[
              { step: '01', node: 'Schedule Trigger', desc: 'Fires every Monday at 08:00 AM on your timezone. Cron expression: 0 8 * * 1.' },
              { step: '02', node: 'Google Sheets: Read Dashboard', desc: 'Reads all rows from your Business Dashboard tab. Columns: metric_name, metric_value, metric_unit, metric_status, metric_target.' },
              { step: '03', node: 'Code: Format Digest', desc: 'Loops through each metric. Assigns 🟢🟡🔴 based on the status column. Builds two Slack Block Kit sections: All Good and Requires Attention.' },
              { step: '04', node: 'Google Sheets: Read Lead Tracker', desc: 'Reads your Leads Log sheet and counts rows with Status = New Lead submitted in the last 7 days.' },
              { step: '05', node: 'Code: Merge & Finalise', desc: 'Combines the metric blocks with the new-leads count and a link back to your sheet into the final Slack payload.' },
              { step: '06', node: 'Slack: Post Weekly Digest', desc: 'Posts the fully formatted Block Kit message to your chosen channel with username Weekly Health.' },
              { step: '07', node: 'Error Trigger → Slack Fallback', desc: 'If any node fails, a plain-text fallback alert fires to the same channel so nothing goes unnoticed.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-5 items-start bg-gray-900 rounded-xl p-5 border border-gray-800">
                <span className="text-amber-500 font-extrabold text-lg w-8 flex-shrink-0">{s.step}</span>
                <div>
                  <p className="text-white font-semibold mb-1">{s.node}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHEET SETUP */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-amber-600 font-semibold text-sm text-center uppercase tracking-widest mb-4">Setup</p>
        <h2 className="text-4xl font-extrabold text-center mb-4">One sheet. Six columns.</h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
          Create a tab called <strong>Business Dashboard</strong> with this structure. Update the values each week — RetroFlow does the rest.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-amber-50 border-b border-amber-100">
              <tr>
                {['metric_name', 'metric_value', 'metric_unit', 'metric_status', 'metric_target', 'metric_last_updated'].map(col => (
                  <th key={col} className="text-left px-4 py-3 font-semibold text-amber-800 whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Monthly Revenue', '12500', '$', '🟢 green', '15000', '22 Mar 2026'],
                ['Outstanding AR', '2800', '$', '🟡 amber', '1000', '22 Mar 2026'],
                ['Active Clients', '14', 'clients', '🟢 green', '20', '22 Mar 2026'],
                ['Tasks Overdue', '12', 'tasks', '🔴 red', '0', '22 Mar 2026'],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-gray-700 whitespace-nowrap">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-gray-400 mt-4">
          Set <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">metric_status</code> to <strong>🟢 green</strong>, <strong>🟡 amber</strong>, or <strong>🔴 red</strong> — RetroFlow reads it automatically.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Your team deserves a better Monday morning.
          </h2>
          <p className="text-amber-100 text-lg mb-10 max-w-xl mx-auto">
            Set up RetroFlow once. Get your business health digest in Slack every Monday — automatically, before anyone opens a spreadsheet.
          </p>
          <a
            href="#how-it-works"
            className="inline-block bg-white hover:bg-amber-50 text-amber-700 font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-10 text-center text-sm text-gray-400">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-xl">📊</span>
          <span className="font-bold text-gray-700">RetroFlow</span>
        </div>
        <p>Powered by n8n · Google Sheets · Slack</p>
        <p className="mt-1">© {new Date().getFullYear()} RetroFlow. All rights reserved.</p>
      </footer>

    </main>
  )
}
