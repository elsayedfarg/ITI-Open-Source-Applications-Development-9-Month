# The router (Observer pattern)
# Observer pattern: notifies every registered handler when an event fires.
# CRITICAL: This file contains ZERO concrete handler class names.
# It knows only the Handler abstraction — never ConsoleHandler, FileHandler, etc.
# Adding a new output requires zero changes here (Open/Closed).

require_relative 'handler'

class EventRouter
  def initialize
    @handlers = []
  end

  # Register any Handler subclass. Type is checked at runtime.
  def register(handler)
    raise ArgumentError, "Expected a Handler, got #{handler.class}" unless handler.is_a?(Handler)
    @handlers << handler
    self
  end

  # Dispatch: every registered handler fires. None knows the others exist.
  def dispatch(event)
    @handlers.each { |h| h.handle(event) }
  end
end