const Engineer = require("../lib/Engineer")

describe("engineer", () => {
    describe("getGitHub", () => {
        it("should return the GitHub username the user input", () => {
           const expectedGithub = "john123"
           const john = new Engineer ("John", 1, "john@gmail.com", "john123")
           const testGithub = john.getGithub();

           expect(testGithub).toEqual(expectedGithub)

        })
    })
})