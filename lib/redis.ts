import { Redis } from '@upstash/redis'

export const redisClient = Redis.fromEnv({
  cache: 'default'
})
