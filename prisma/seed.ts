/* eslint-disable no-console */

import { PrismaClient, User } from "@prisma/client";
import { faker } from "@faker-js/faker";
import * as dotenv from "dotenv";

const prisma = new PrismaClient();

const fakerUser = (): User => ({
  id: faker.datatype.uuid(),
  role: "USER",
  showBirthday: true,
  showEmail: true,
  imageUrl: faker.image.avatar(),
  teamId: "cd2ba765-7359-4345-a6ea-7ac4045e0c8e",
  workLocation: faker.address.city(),
  isDisabled: false,
  birthday: faker.date.birthdate(),
  password: faker.random.alphaNumeric(),
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
});

async function main() {
  const fakerRounds = 10;
  dotenv.config();
  console.log("Seeding...");
  /// --------- Users ---------------
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.user.create({ data: fakerUser() });
  }
}

main()
  .catch((e: object) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
