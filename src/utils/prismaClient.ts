import { PrismaClient } from "@prisma/client"

export const prismaClient = () => {
  return new PrismaClient()
}
