import express from "express";
import { db } from "./db/index";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";
import morgan from "morgan"

const app = express();
app.use(morgan("combined"))
app.use(express.json());

app.get("/", (_, res) => res.send(" Nodejs server with postgres and CI/CD API running!"));

app.get("/users", async (_, res) => {
    const allUsers = await db.select().from(users);
    res.json(allUsers);
});

app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    const newUser = await db.insert(users).values({ name, email }).returning();
    res.status(201).json(newUser[0]);
});

app.get("/users/:email", async (req, res) => {
    const found = await db.select().from(users).where(eq(users.email, req.params.email));
    if (!found.length) return res.status(404).send("User not found");
    res.json(found[0]);
});

export default app;