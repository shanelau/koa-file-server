# nodeJS project template


## http://localhost:3000/
* avatar: file


## PM2
### cli

```
# Start all applications
$ pm2 start ecosystem.config.js

# Start only the app named worker-app
$ pm2 start ecosystem.config.js --only worker-app

# Stop all
$ pm2 stop ecosystem.config.js

# Restart all
$ pm2 start   ecosystem.config.js
## Or
$ pm2 restart ecosystem.config.js

# Reload all
$ pm2 reload ecosystem.config.js

# Delete all
$ pm2 delete ecosystem.config.js
```
### Updating running conf

```
# Inject what is declared in env_production
$ pm2 start process.json --env production

# Inject what is declared in env_staging
$ pm2 restart process.json --env staging
```
### Switching environments

You just need to specify the --env <environment_name>

```
# Inject what is declared in env_production
$ pm2 start process.json --env production

# Inject what is declared in env_staging
$ pm2 restart process.json --env staging
```

### node args

```
$pm2 start test.js --node-args "port=3001 sitename='first pm2 app'"


```

The nodeArgs argument will be parsed as
```
[
  "port=3001",
  "sitename=first pm2 app"
]
```
