
describe("lab testing:", () => {


    describe("users routes:", () => {
        // Note: user name must be sent in req query not req params
        it("req to get(/user/search) ,expect to get the correct user with his name", async () => { })
        it("req to get(/user/search) with invalid name ,expect res status and res message to be as expected", async () => { })

    })


    describe("todos routes:", () => {
        it("req to patch( /todo/) with id only ,expect res status and res message to be as expected", async () => { })
        it("req to patch( /todo/) with id and title ,expect res status and res to be as expected", async () => { })

        it("req to get( /todo/user) ,expect to get all user's todos", async () => { })
        it("req to get( /todo/user) ,expect to not get any todos for user hasn't any todo", async () => { })

    })

    // afterAll(async () => {
    //     await clearDatabase()
    // })


})