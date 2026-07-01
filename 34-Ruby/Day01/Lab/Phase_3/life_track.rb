# Entry point / CLI menu
# Entry point — CLI menu and wiring.
# This is the ONLY file that knows which handlers exist (wiring is allowed here).
# The router itself never sees concrete class names.

require_relative 'event'
require_relative 'event_router'
require_relative 'console_handler'
require_relative 'file_handler'
require_relative 'html_handler'

# ── Wire up the router ────────────────────────────────────────────────────────
router = EventRouter.new
           .register(ConsoleHandler.new)
           .register(FileHandler.new)
           .register(HtmlHandler.new)

# ── Menu helpers ──────────────────────────────────────────────────────────────
MENU_OPTIONS = [
  { label: "Log a work session",     type: "WORK"     },
  { label: "Log a study session",    type: "STUDY"    },
  { label: "Log an exercise session",type: "EXERCISE" },
  { label: "Log a meal",             type: "MEAL"     }
].freeze

def prompt_event(type)
  print "Description: "
  description = gets&.chomp&.strip
  print "Duration (minutes): "
  duration = gets&.chomp&.strip
  Event.new(type: type, description: description, duration_minutes: duration)
end

# ── Main loop ─────────────────────────────────────────────────────────────────
puts "\n=== LifeTrack ===\n"
puts "Dashboard: open life_track/dashboard.html in your browser\n\n"

loop do
  MENU_OPTIONS.each_with_index do |opt, i|
    puts "#{i + 1}. #{opt[:label]}"
  end
  puts "5. Exit\n\n"

  print "Choose an option: "
  choice = gets&.chomp&.strip&.to_i

  break if choice == 5

  option = MENU_OPTIONS[choice - 1]
  if option.nil?
    puts "Invalid choice. Please enter 1–5.\n\n"
    next
  end

  event = prompt_event(option[:type])
  router.dispatch(event)

  puts "\nDashboard updated → dashboard.html\n\n"
end

puts "\nGoodbye! Open dashboard.html to review your session.\n"