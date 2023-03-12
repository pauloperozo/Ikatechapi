const supertest = require('supertest')
const app = require('../app')

const request = supertest(app)

describe("Servidor Activo",() => {

    describe("GET /", () =>{
        it("Succces", async () => {
            const response = await request.get("/").send()
            expect(response.status).toBe(200)
        })
    })

})