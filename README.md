# twatt-recent
Using twitter api exercise with Node.js, Express & Postman

### API Routes (Test with Postman)
Route | HTTP | Description |
------|------|------------|
`localhost:3000/api/twatt/mytweet` | GET | View tweet made by user
`localhost:3000/api/twatt/timeline` | GET | View tweet on user timeline
`localhost:3000/api/twatt/mentions` | GET | View mentions on user
`localhost:3000/api/twatt/search?q=` | GET | Search tweet filter by query(add keyword after equal sign)


### Tree view Directory
```
.
├── app.js
├── bin
│   └── www
├── config
│   └── config.js
├── controller
│   └── controller.js
├── package.json
├── README.md
└── routes
    └── api.js

4 directories, 7 files

```

### Contributors
Copyright 2016 ahyanarizky
