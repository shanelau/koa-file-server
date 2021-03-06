const appName = require('./package.json').name || 'app';
const entryPoint = require('./package.json').main || './app.js';

module.exports = {
  apps : [{
    name        : appName,
    script      : entryPoint,
    instances  : 1,
    exec_mode  : "fork",
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    out_file: `./logs/log-out.log`,
    error_file: `./logs/log-err.log`,
    merge_logs: true,
    env: {
      "NODE_ENV": "development",
      "PORT": 3000,
    },
    env_production : {
       "NODE_ENV": "production"
    }
  },
  ],
    "dev" : {
      "user" : "node",
      "host" : "212.83.163.1",
      "ref"  : "origin/master",
      "repo" : "git@github.com:repo.git",
      "path" : "/var/www/development",
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      "post-deploy" : "pm2 startOrRestart ecosystem.json --env dev",
      "env"  : {
        "NODE_ENV": "staging"
      }
    }
}