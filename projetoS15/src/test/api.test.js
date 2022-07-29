const request = require("supertest")
const app = require("../app")

describe("API test", () => {

    test("GET /users/accessUser", (done) => {
        request(app) 
            .get("/users/accessUser") 
            .expect(200) 
            .expect((res) => {
                expect(res.body.length).not.toBe(0)
            })
            .end((err, res) => {
                if(err) return done(err)
                return done()
            })
    })

    test("POST /users/register", (done) => {
        request(app)
            .post("/users/register")
            .expect("Content-Type", /json/)
            .send({
                name: "Luana Souza",
                email: "luana@gmail.com",
                password: "2bolinha123",
                age: "32",
                workoutPreference: "cardio"
            })
            .expect(201)
            .end((err, res) => {
                if(err) return done(err)
                elementId = res.body.savedUser.id
                return done()
            })
    })
});