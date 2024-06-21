/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:Vlzk67hWTGdI@ep-wild-snow-a53lhjmk.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };