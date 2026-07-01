# Output 3: regenerates HTML dashboard
# html_handler.rb
# Single responsibility: regenerate the full HTML dashboard on every event.
# Reads all past events from the log file and rebuilds dashboard.html completely.
# No terminal output. No DB. Pure HTML generation.

require_relative 'handler'
require_relative 'file_handler'

class HtmlHandler < Handler
  DASHBOARD_PATH = File.expand_path("dashboard.html", __dir__)

  TYPE_COLORS = {
    "WORK"     => { bg: "#3b82f6", light: "#eff6ff", icon: "💼" },
    "STUDY"    => { bg: "#8b5cf6", light: "#f5f3ff", icon: "📚" },
    "EXERCISE" => { bg: "#10b981", light: "#ecfdf5", icon: "🏃" },
    "MEAL"     => { bg: "#f59e0b", light: "#fffbeb", icon: "🍽️"  }
  }.freeze

  def handle(event)
    events = load_all_events
    write_dashboard(events)
  end

  private

  def load_all_events
    return [] unless File.exist?(FileHandler::LOG_PATH)
    File.readlines(FileHandler::LOG_PATH, chomp: true).map do |line|
      parse_line(line)
    end.compact
  end

  # Parse lines written by Event#to_line:
  # [2026-06-03 14:51] STUDY — Deep work on Ruby SOLID principles (45 min)
  def parse_line(line)
    m = line.match(/\[(.+?)\]\s+(\w+)\s+—\s+(.+?)\s+\((\d+)\s+min\)/)
    return nil unless m
    { timestamp: m[1], type: m[2], description: m[3], duration: m[4].to_i }
  end

  def write_dashboard(events)
    File.write(DASHBOARD_PATH, build_html(events))
  end

  def build_html(events)
    total      = events.size
    total_mins = events.sum { |e| e[:duration] }
    by_type    = events.group_by { |e| e[:type] }

    type_stats = %w[WORK STUDY EXERCISE MEAL].map do |t|
      list  = by_type[t] || []
      mins  = list.sum { |e| e[:duration] }
      c     = TYPE_COLORS[t]
      { type: t, count: list.size, mins: mins, color: c[:bg], light: c[:light], icon: c[:icon] }
    end

    rows = events.reverse.map do |e|
      c = TYPE_COLORS[e[:type]] || { bg: "#6b7280", icon: "📌" }
      <<~ROW
        <tr>
          <td class="ts">#{e[:timestamp]}</td>
          <td><span class="badge" style="background:#{c[:bg]}">#{c[:icon]} #{e[:type]}</span></td>
          <td>#{escape(e[:description])}</td>
          <td class="dur">#{e[:duration]} min</td>
        </tr>
      ROW
    end.join

    stat_cards = type_stats.map do |s|
      <<~CARD
        <div class="card" style="border-top:4px solid #{s[:color]}">
          <div class="card-icon">#{s[:icon]}</div>
          <div class="card-label">#{s[:type]}</div>
          <div class="card-count">#{s[:count]}</div>
          <div class="card-mins">#{s[:mins]} min</div>
        </div>
      CARD
    end.join

    now = Time.now.strftime("%Y-%m-%d %H:%M:%S")

    <<~HTML
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LifeTrack Dashboard</title>
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:wght@400;700;900&display=swap" rel="stylesheet">
        <style>
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          :root {
            --bg:       #0f0f11;
            --surface:  #18181c;
            --border:   #2a2a30;
            --text:     #e8e8ed;
            --muted:    #6b6b78;
            --accent:   #a78bfa;
          }

          body {
            background: var(--bg);
            color: var(--text);
            font-family: 'DM Mono', monospace;
            min-height: 100vh;
            padding: 2.5rem 1.5rem;
          }

          header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 2.5rem;
            border-bottom: 1px solid var(--border);
            padding-bottom: 1.5rem;
          }

          .logo {
            font-family: 'Fraunces', serif;
            font-size: 2.2rem;
            font-weight: 900;
            letter-spacing: -1px;
            background: linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .logo span {
            font-weight: 400;
            font-size: 1rem;
            -webkit-text-fill-color: var(--muted);
            display: block;
            margin-top: 2px;
            font-family: 'DM Mono', monospace;
          }

          .updated {
            font-size: 0.72rem;
            color: var(--muted);
            text-align: right;
          }

          .updated strong { color: var(--accent); }

          /* Summary bar */
          .summary {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
          }

          .summary-pill {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 999px;
            padding: 0.45rem 1.1rem;
            font-size: 0.8rem;
            color: var(--muted);
          }

          .summary-pill strong { color: var(--text); font-size: 1rem; }

          /* Stat cards */
          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 1rem;
            margin-bottom: 2.5rem;
          }

          .card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 1.2rem 1rem 1rem;
            position: relative;
            overflow: hidden;
            transition: transform 0.15s;
          }

          .card:hover { transform: translateY(-2px); }

          .card-icon  { font-size: 1.6rem; margin-bottom: 0.5rem; }
          .card-label { font-size: 0.65rem; color: var(--muted); letter-spacing: 0.12em; text-transform: uppercase; }
          .card-count { font-family: 'Fraunces', serif; font-size: 2.4rem; font-weight: 900; line-height: 1; margin: 0.2rem 0; }
          .card-mins  { font-size: 0.75rem; color: var(--muted); }

          /* Table */
          .table-wrap {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
          }

          .table-head {
            padding: 1rem 1.4rem;
            border-bottom: 1px solid var(--border);
            font-size: 0.7rem;
            color: var(--muted);
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }

          table { width: 100%; border-collapse: collapse; }

          th {
            text-align: left;
            font-size: 0.65rem;
            color: var(--muted);
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 0.8rem 1rem;
            border-bottom: 1px solid var(--border);
          }

          td {
            padding: 0.8rem 1rem;
            font-size: 0.8rem;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
          }

          tr:last-child td { border-bottom: none; }
          tr:hover td { background: rgba(255,255,255,0.025); }

          .ts   { color: var(--muted); font-size: 0.72rem; white-space: nowrap; }
          .dur  { color: var(--muted); white-space: nowrap; }

          .badge {
            display: inline-block;
            color: #fff;
            border-radius: 5px;
            padding: 0.2rem 0.55rem;
            font-size: 0.7rem;
            font-weight: 500;
            white-space: nowrap;
          }

          .empty {
            padding: 3rem;
            text-align: center;
            color: var(--muted);
            font-size: 0.85rem;
          }
        </style>
      </head>
      <body>
        <header>
          <div class="logo">LifeTrack<span>event dashboard</span></div>
          <div class="updated">Last updated<br><strong>#{now}</strong></div>
        </header>

        <div class="summary">
          <div class="summary-pill">Total events <strong>#{total}</strong></div>
          <div class="summary-pill">Total time <strong>#{total_mins} min</strong></div>
        </div>

        <div class="cards">#{stat_cards}</div>

        <div class="table-wrap">
          <div class="table-head">Recent Events</div>
          #{events.empty? ? '<div class="empty">No events logged yet. Start the CLI to add some!</div>' : "<table><thead><tr><th>Time</th><th>Type</th><th>Description</th><th>Duration</th></tr></thead><tbody>#{rows}</tbody></table>"}
        </div>
      </body>
      </html>
    HTML
  end

  def escape(str)
    str.to_s
       .gsub("&", "&amp;")
       .gsub("<", "&lt;")
       .gsub(">", "&gt;")
  end
end