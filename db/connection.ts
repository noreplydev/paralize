import { connect } from "mongoose"

export async function newConnection() {
  return await connect(process.env.DATABASE_URL as string)
    .then(() => console.log('Database connected!'))
    .catch(err => console.error(err))
}