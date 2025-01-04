import { PrismaClient } from '@prisma/client'
import { permitExtension } from '../extensions/permitExtension'

const prisma = new PrismaClient()
const extendedPrisma = prisma.$extends(permitExtension)

export default extendedPrisma
