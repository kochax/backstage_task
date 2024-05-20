import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const idParam = getRouterParam(event, "id");
  const id = idParam && parseInt(idParam);

  if (!id) {
    throw new Error("Id is required");
  }

  return prisma.product.findFirstOrThrow({ where: { id } });
});
