"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./db/index");
const schema_1 = require("./db/schema");
const drizzle_orm_1 = require("drizzle-orm");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.json());
app.get("/", (_, res) => res.send(" Nodejs server with postgres and CI/CD API running!"));
app.get("/users", async (_, res) => {
    const allUsers = await index_1.db.select().from(schema_1.users);
    res.json(allUsers);
});
app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    const newUser = await index_1.db.insert(schema_1.users).values({ name, email }).returning();
    res.status(201).json(newUser[0]);
});
app.get("/users/:email", async (req, res) => {
    const found = await index_1.db.select().from(schema_1.users).where((0, drizzle_orm_1.eq)(schema_1.users.email, req.params.email));
    if (!found.length)
        return res.status(404).send("User not found");
    res.json(found[0]);
});
exports.default = app;
