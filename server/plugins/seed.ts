import { PrismaClient } from '@prisma/client'
import { products } from '../products.json'

const prisma = new PrismaClient()

export default defineNitroPlugin(async () => {
  const allProducts = await prisma.product.findMany()

  if (allProducts.length === 0) {
    console.debug('Seeding database...')
    const promises: Promise<any>[] = []

    for (const product of products) {
      promises.push(prisma.product.create({
        data: {
          ...product,
          image: 'https://placehold.co/600x400/png'
        }
      }))
    }

    await Promise.all(promises)
  } else {
    console.debug('Database already seeded.')
  }
})