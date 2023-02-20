const Employee = require("../lib/Employee")

describe("employee", () => {
    describe("getName", () => {
        it("should return the name the user input", () => {
           const expectedName = "John"
           const john = new Employee ("John", 1, "john@gmail.com")
           const testName = john.getName();

           expect(testName).toEqual(expectedName)

        })
    })
})