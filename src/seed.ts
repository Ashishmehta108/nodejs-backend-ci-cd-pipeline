import { db } from "./db/index";
import { users } from "./db/schema";

async function seed() {
  console.log("🌱 Seeding database...");

  await db.delete(users); 
  await db.insert(users).values([
    { name: "Ashish", email: "ashish@example.com" },
    { name: "John Doe", email: "john@example.com" },
  ]);

  console.log("✅ Seed completed!");
  process.exit(0);
}

seed();
