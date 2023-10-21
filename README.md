# Kitra

### Installation

1. Clone the repository

```bash
https://github.com/DyepLucban/Kitra.git
```

2. Install NPM
```bash
npm install
```

3. Start the server
```bash
npm run start
```

### Migrations

Run migrations.

```bash
npx sequelize-cli db:migrate
```


### Seeders

Run seeders.

```bash
npx sequelize db:seed:all
```


### Endpoints

Browse all the treasures
```bash

1. GET '/v1/browse-treasure'

```

Find a treasure within specified longitude, latitude and distance
```bash
2. POST '/v1/find-treasure'

Pass an object

example:
  {
    // note: Use the raw body on postman
    "lat": 14.5872615919051,
    "lon": 120.979504794655,
    "distance": 10,
    "price_value": 10 // price_value is an optional value
  }  
```