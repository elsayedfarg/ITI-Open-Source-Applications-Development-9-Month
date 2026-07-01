# Output 1: prints to terminal
# Single responsibility: print the event to the terminal.
# No file I/O. No HTML. No stats. Just terminal output.

require_relative 'handler'

class ConsoleHandler < Handler
  def handle(event)
    puts "\n#{event.to_line}"
    puts "✓ Event logged."
  end
end