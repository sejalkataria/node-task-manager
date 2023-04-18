const mongoose = require('mongoose')
const connection = async () => {
    const connect = await mongoose.connect(process.env.MONGODB_URL)
    return connect
}
connection().then((result) => {
    console.log("connection SuccessFull")
}).catch((e) => {
    console.log(e)
})
