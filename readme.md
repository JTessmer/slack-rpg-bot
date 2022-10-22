# Slack RPG Bot

This is a little bot for Slack.

## Developing

This project uses ESLint, Prettier, and Typescript. It's strongly encouraged to use a code editor which provides ESLint & Typescript code highlighting, as well as automatic on-save code formatting.

### Getting Started

After cloning this repository, dependencies must be installed. It is recommended to use `npm ci` to install dependencies -- instead of `npm i` or `npm install` -- as this will ensure a clean install and an unmodified package.lock file.

The following scripts have been made available:

| npm run ...   | Action                                                                   |
| ------------- | ------------------------------------------------------------------------ |
| build         | Builds the app in the /dist folder for distribution                      |
| dev           | Runs the app locally and restarts the app when file changes are detected |
| lint          | Scans the /src folder for code smell & style issues                      |
| test          | Runs all tests for the application                                       |
| test:coverage | Runs all tests for the application and generates a coverage report       |
| test:watch    | Runs all tests for the application and monitors for changes              |

## Deploying

TBD

## Reference Documentation

- Slack SDK: <https://github.com/slackapi/node-slack-sdk>
- Fastify: <https://www.fastify.io/docs/latest/Guides/Getting-Started>

### Example Request Body from Slack

This is example body content that is sent by Slack when a user uses the `/roll` command:

```javascript
{
  token: 'abc123',
  team_id: 'def456',
  team_domain: 'myorganization',
  channel_id: 'ghi789',
  channel_name: 'directmessage',
  user_id: 'xyz098',
  user_name: 'sam',
  command: '/roll',
  text: '1d6 +2',
  api_app_id: 'uvw765',
  is_enterprise_install: 'false',
  response_url: 'https://hooks.slack.com/commands/abcdef-url',
  trigger_id: '12345.67890.abc123'
}
```
