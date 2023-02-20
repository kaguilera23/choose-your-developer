const Manager = require("../lib/Manager")

describe("manager", () => {
    describe("getRole", () => {
        it("should return the role of 'Manager'", () => {
           const expectedRole = "Manager"
           const john = new Manager ("John", 1, "john@gmail.com", "678-789-9876")
           const testRole = john.getRole();

           expect(testRole).toEqual(expectedRole)

        })
    })
})