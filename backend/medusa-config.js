const { join } = require("path")
const { 
  STORAGE, 
  DATABASE_URL,
  REDIS_URL,
  JWT_SECRET,
  COOKIE_SECRET,
  STRIPE_WEBHOOK_SECRET,
  STRIPE_API_KEY,
  ADMIN_CORS,
  STORE_CORS,
  DATABASE_SSL,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
} = process.env

const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: `@medusajs/file-local`,
    options: {
      upload_dir: "uploads",
    },
  },
  {
    resolve: "@medusajs/admin",
    /** @type {import('@medusajs/admin').PluginOptions} */
    options: {
      autoRebuild: true,
    },
  },
]

const modules = {}

/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
const projectConfig = {
  jwtSecret: JWT_SECRET || "supersecret",
  cookieSecret: COOKIE_SECRET || "supersecret",
  store_cors: STORE_CORS || "http://localhost:8000",
  database_extra: DATABASE_SSL === "true" ? { ssl: { rejectUnauthorized: false } } : {},
  database_logging: false,
  admin_cors: ADMIN_CORS || "http://localhost:7001",
  redis_url: REDIS_URL,
  database_url: DATABASE_URL || "postgres://localhost/medusa-store",
  database_type: "postgres",
  http: {
    store: {
      cors: STORE_CORS || "http://localhost:8000",
    },
    admin: {
      cors: ADMIN_CORS || "http://localhost:7001",
    },
  },
}

if (STRIPE_API_KEY) {
  plugins.push({
    resolve: `medusa-payment-stripe`,
    options: {
      api_key: STRIPE_API_KEY,
      webhook_secret: STRIPE_WEBHOOK_SECRET,
    },
  })
}

/** @type {import('@medusajs/medusa').ConfigModule} */
module.exports = {
  projectConfig,
  plugins,
  modules,
}
