# Data class (the event struct)
# Carries all data a single life event needs.
# Deliberately has NO knowledge of how it gets stored or displayed.

class Event
  attr_reader :type, :description, :duration_minutes, :timestamp

  TYPES = %w[WORK STUDY EXERCISE MEAL].freeze

  def initialize(type:, description:, duration_minutes:)
    raise ArgumentError, "Unknown type: #{type}" unless TYPES.include?(type)
    @type             = type
    @description      = description
    @duration_minutes = duration_minutes.to_i
    @timestamp        = Time.now
  end

  def formatted_time
    @timestamp.strftime("%Y-%m-%d %H:%M")
  end

  def to_line
    "[#{formatted_time}] #{@type} — #{@description} (#{@duration_minutes} min)"
  end
end