# Database Requirements

## Goals

1. Allow users to send me messages which I can reply to in real time
2. Allow users to send suggestions or critism
3. Track how many times my site is visited

## Models

- **Message** _(Allows for realtime chat: Needs websocket)_
  - Id
  - Date
  - First Name _(Required)_
  - Message

- **Suggestion**
  - Id
  - Date
  - First Name
  - Suggestion

- **Critism**
  - Id
  - Date
  - Message

- **Visit Count**
  - Current Visit Count
  - Date

## Methods

- **Message**
  - Create New Message
  - Get Message by First Name
  - Get All Messages

- **Suggestion**
  - Create New Suggestion
  - Get Suggestion by First Name
  - Get All Suggestions
  - Fulfill Suggestion
  - Delete Suggestion by ID

- **Critism**
  - Create new Critism
  - Get Critism by Date
  - Get All Critism

- **Visit Count**
  - New Visit
  - Get All Visits