const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId
    },
    text : {
        type :String,
        required : true
    },
    replies : [
        {
            user :{
                type: Schema.Types.ObjectId
            },
            text : {
                type : String,
                require : true
            },
            date : {
                type : Date,
                default: Date.now
            }
        }
    ],
    date : {
        type : Date,
        default : Date.now
    }

});


module.exports = Post = mongoose.model('message', MessageSchema);