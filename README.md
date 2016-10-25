# twatt-recent

# what inside package.json that you must install

```
{
  "name": "twatt-recent",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "ejs": "~2.4.1",
    "express": "~4.13.4",
    "morgan": "~1.7.0",
    "oauth": "^0.9.14",
    "serve-favicon": "~2.3.0"
  }
}
```

# Structure App
```
├── README.md
├── app.js
├── bin
│   └── www
├── config
│   ├── configTweet.js
│   └── oauth_tweet.js
├── controller
│   ├── api_tweet.js
│   └── controller_twatt.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── api.js
│   └── index.js
└── views
    ├── error.ejs
    └── index.ejs
```

# How To Access Api and get Json
```
http://localhost:3000/api/search?user_input=<your input>
example :
http://localhost:3000/search?user_input=PPAP
```

```
http://localhost:3000/api/
```
# How to use the app
```
http://localhost:3000/
```
```
http://localhost:3000/search?user_input=<your input>
example :
http://localhost:3000/search?user_input=PPAP
```
