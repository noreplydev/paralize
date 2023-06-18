import { connect } from "mongoose"

export async function newConnection() {
  return await connect(process.env.DATABASE_URL as string)
    .catch(err => console.error(err))
}