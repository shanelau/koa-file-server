const r = require.context('./spec', true, /\.spec\.js$/i);
r.keys().forEach(key => r(key));
