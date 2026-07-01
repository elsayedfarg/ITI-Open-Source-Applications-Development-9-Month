# Abstract base (shared interface)
# Shared interface — enforces the contract at runtime.
# Every output MUST implement #handle(event).
# A class that forgets to implement it fails loudly, not silently.

class Handler
  def handle(event)
    raise NotImplementedError, "#{self.class}#handle is not implemented. " \
      "Every Handler subclass must define handle(event)."
  end
end