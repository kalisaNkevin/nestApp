// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.user.upsert({
    where: { email: 'kalisangabokevin@gmail.com' },
    update: {},
    create: {
      firstName: 'kalisa',
      lastName: 'kevin',
      email: 'kalisangabokevin@gmail.com',
      hash: 'Andela@1234',
      role: 'admin',
    },
  });

  console.log({ post1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });