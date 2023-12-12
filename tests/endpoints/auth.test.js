import { PrismaClient, Prisma } from "@prisma/client";
import request from "supertest";
import app from "../../app.js";

async function cleanupDatabase() {
  const prisma = new PrismaClient();
  const modelNames = Prisma.dmmf.datamodel.models.map((model) => model.name);

  return Promise.all(
    modelNames.map((modelName) => prisma[modelName.toLowerCase()].deleteMany())
  );
}

describe("POST /auth", () => {
  beforeAll(async () => {
    await cleanupDatabase();
  });

  afterAll(async () => {
    await cleanupDatabase();
  });

  const user = {
    name: "Scheam",
    email: "Scheam@example.com",
    password: "insecure",
  };

  it("with valid data should return 200", async () => {
    await request(app).post("/users").send(user)
    const response = await request(app)
      .post("/auth")
      .send(user)
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBeTruthy;
    expect(response.body.token).toBeTruthy;
  });

  it("with incorrect email should not return token", async () => {
    user.email = "uniqueexample@gmail.com";
    await request(app).post("/users").send(user)
    user.email = "uniqueexamplewrong@gmail.com";
    const response = await request(app)
      .post("/auth")
      .send(user)
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(401);
    expect(response.body.id).toBeFalsy;
    expect(response.body.error).toBeTruthy;
    expect(response.body.error).toBe("Email address or password not valid");
  });

  it("with incorrect password should not return token", async () => {
    user.email = "Passwordtest@example.com";
    user.password = "testpassword";
    await request(app).post("/users").send(user)
    user.password = "testpasswordwrong";
    const response = await request(app)
      .post("/auth")
      .send(user)
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(401);
    expect(response.body.id).toBeFalsy;
    expect(response.body.token).toBeFalsy;
    expect(response.body.error).toBeTruthy;
    expect(response.body.error).toBe("Email address or password is incorrect",);
  
  });
});
