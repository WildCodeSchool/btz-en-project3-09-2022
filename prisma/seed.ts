/* eslint-disable no-console */
import { faker } from "@faker-js/faker";
import { PrismaClient, User, Site } from "@prisma/client";
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

const userArray = new Array(10).fill(null).map(() => fakerUser());

const userIdArray = userArray.map((user) => user.id);
const rand = Math.floor(Math.random() * userIdArray.length);

const fakerSite = (): Site => ({
  id: faker.datatype.uuid(),
  name: faker.random.word(),
  userId: userIdArray[rand],
  imageUrl: faker.image.city(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
});

async function main() {
  const fakerRounds = 1;
  dotenv.config();
  console.log("Seeding...");
  console.log(userArray);

  /// --------- Users ---------------
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.user.create({ data: fakerUser() });
  }
  /// --------- Sites ---------------
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.site.create({ data: fakerSite() });
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
