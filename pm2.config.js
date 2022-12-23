module.exports = {
  apps: [
    {
      name: 'slack-rpg-bot',
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      max_restarts: 50,
      watch: false,
      env: {
        PORT: 4000
      }
    }
  ]
}
