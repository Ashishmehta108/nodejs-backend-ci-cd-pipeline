"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./db/index");
const schema_1 = require("./db/schema");
async function seed() {
    console.log("🌱 Seeding database...");
    await index_1.db.delete(schema_1.users);
    await index_1.db.insert(schema_1.users).values([
        { name: "Ashish", email: "ashish@example.com" },
        { name: "John Doe", email: "john@example.com" },
    ]);
    console.log("✅ Seed completed!");
    process.exit(0);
}
seed();
