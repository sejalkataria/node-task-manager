const mongoose = require('mongoose')
const connection = async () => {
    const connect = await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')
    return connect
}
connection().then((result) => {
    console.log("connection SuccessFull")
}).catch((e) => {
        console.log(e)
    })
