import Env from './interfaces/Env'

let env : Env = {
  port: process.env.PORT || 5000,
  database: {
    type: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: process.env.DATABASE_PORT || 3306,
      database: process.env.DATABASE_NAME || 'test',
      user: process.env.DATABASE_USER || 'user',
      password: process.env.DATABASE_PASSWORD || 'password',
    }
  }
}

export default env;