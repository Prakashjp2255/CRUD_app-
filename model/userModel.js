const mongoose = require ("mongoose");
var Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    address: {
        type:String,
        required:true,
    },

})

module.exports = mongoose.model("user" , userSchema);
