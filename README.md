# Dog Breed Favourites API

Deployed at https://backend-cm-production.up.railway.app

Swagger docs at https://backend-cm-production.up.railway.app/api/docs

GitHub: https://github.com/gurhanPro/backend-cm

Hosted on Railway | Database on Neon PostgreSQL

## Setup

```bash
cp .env.example .env
npm install
npx prisma migrate deploy
npm run start:dev
```

## Scripts

- `npm run start:dev` - dev server with hot reload
- `npm run start` - production start
- `npm run build` - compile TypeScript

## API

Swagger docs available at `/api/docs`

### Endpoints

- `GET /api/favourites?userId=1` - get user's favourites
- `POST /api/favourites` - add favourite `{ imageUrl, userId }`
- `DELETE /api/favourites` - remove favourite `{ imageUrl, userId }`

## Stack

- NestJS
- Prisma + PostgreSQL (Neon)
- Swagger
- class-validator
