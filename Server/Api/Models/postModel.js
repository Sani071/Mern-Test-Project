const mongoose = require('mongoose')
const Schema = mongoose.Schema



function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


//const validator = require('validator')
const postSchema = new Schema({
    user_name: {
        type: String,
        required:true
    },
    post:{
        type:String,
        required:true
    },  
    time: {
        type:String,
        default:formatAMPM(new Date())
    },
    like:{
        type:Array
    },
    cmnt:{
        type:Array,
        id:String
    }
})
const Post= mongoose.model('Post', postSchema)
module.exports = Post