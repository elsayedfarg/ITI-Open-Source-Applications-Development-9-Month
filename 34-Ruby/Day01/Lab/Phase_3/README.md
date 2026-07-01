# LifeTrack — Phase 3

A small Ruby CLI app for tracking life events and generating a dashboard.

## Overview

LifeTrack captures four event types: `WORK`, `STUDY`, `EXERCISE`, and `MEAL`.
Each event is dispatched to all registered handlers using an observer-style router.

The app demonstrates:

- `Event`: a plain data object that stores type, description, duration, and timestamp
- `Handler`: an abstract output contract with a `handle(event)` method
- `EventRouter`: dispatches each event to every registered handler
- Separation of concerns between CLI, logging, and dashboard generation

## Files

- `life_track.rb`: main CLI entry point and router wiring
- `event.rb`: event data model
- `handler.rb`: abstract handler interface
- `event_router.rb`: observer-style router for handler dispatch
- `console_handler.rb`: prints event confirmation to the terminal
- `file_handler.rb`: appends events to `events.log`
- `html_handler.rb`: regenerates `dashboard.html` from the log
- `dashboard.html`: generated HTML dashboard for event summaries
- `events.log`: generated event history log

## How to run

1. Open a terminal in this folder.
2. Run:

```bash
ruby life_track.rb
```

3. Choose one of the menu options.
4. Enter the event description and duration when prompted.
5. Open `dashboard.html` in your browser to view the updated dashboard.

## Output

On each event, the app:

- prints a message in the console
- appends the event to `events.log`
- regenerates `dashboard.html`

## Notes

- `EventRouter` does not know about concrete handler classes.
- New output handlers can be added without changing the router.
- `HtmlHandler` reads `events.log` and rebuilds the dashboard fully on every event.

## License

No license specified.
