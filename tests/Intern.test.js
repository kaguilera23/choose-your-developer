const Intern = require("../lib/Intern")

describe("intern", () => {
    describe("getSchool", () => {
        it("should return the school the user input", () => {
           const expectedSchool = "Mercer University"
           const john = new Intern ("John", 1, "john@gmail.com", "Mercer University")
           const testSchool = john.getSchool();

           expect(testSchool).toEqual(expectedSchool)
        })
    })
})