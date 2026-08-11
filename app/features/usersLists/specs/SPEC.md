# Users Lists

## Intent
Allow a user to add usernames to a list and delete each item individually from the same screen.

## In scope
- Input to capture a username
- Add action that trims whitespace and ignores empty values
- List of current users with delete buttons
- Empty state when there are no users

## Out of scope
- Persistence across refreshes
- Backend storage
- User editing or bulk actions

## Requirements
- The input value is controlled through the ViewModel state
- Empty values are not added to the list
- Each user can be removed independently
- The add action is disabled when the trimmed username is empty

## Edge cases and errors
- Whitespace-only input should be ignored
- Duplicate names are allowed unless the product explicitly forbids them

## Acceptance criteria
- [ ] A non-empty username can be added to the list
- [ ] A whitespace-only username does not create an item
- [ ] The add button is disabled when the input is empty
- [ ] Each item can be deleted individually
- [ ] The empty-state message appears when the list is empty
