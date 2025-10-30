import request from "supertest";
import app from "../app";
import { db } from "../db";
import { users } from "../db/schema";
import { randomString } from "../randomString";



describe("Drizzle API Tests", () => {
    it("should return welcome message", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
    });

    it("should create a user", async () => {
        const str=randomString(7)
        const res = await request(app)
            .post("/users")
            .send({ name: "Ashish12", email: `ashish${str}m12356@example.com` });
        expect(res.statusCode).toBe(201); 
        expect(res.body.email).toBe(`ashish${str}m12356@example.com`);
    });
});
