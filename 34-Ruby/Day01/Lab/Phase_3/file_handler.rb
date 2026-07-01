# Output 2: appends to log file
# Single responsibility: append each event as a line in events.log.
# No terminal output. No HTML. Just file I/O.

require_relative 'handler'

class FileHandler < Handler
  LOG_PATH = File.expand_path("events.log", __dir__)

  def handle(event)
    File.open(LOG_PATH, "a") do |f|
      f.puts event.to_line
    end
  end
end