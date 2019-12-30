# Nuxt Raychat
> Add nuxt Raychat to your nuxt.js application.

**Note:** nuxt Raychat is not enabled in dev mode.
You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup
- Add `@nuxt-raychat` dependency using yarn or npm to your project
- Add `@nuxt-raychat` to `modules` section of `nuxt.config.js`
```js
modules: [
    ['@nuxt-raychat', { 
        id: 'rayid',
    }],
]
```

## Options

### `id`
- Required
- Raychat ID

