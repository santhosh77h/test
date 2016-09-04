/**
 * Created by Santhosh on 30-08-2016.
 */

var validations = require('../controllers/methods'),
    messages = require('../controllers/messages'),
    usernameMethods = validations.username,
    emailMethods = validations.email,
    passwordMethods = validations.password,
    mobileNumberMethods = validations.mobileNumber;

var username = function (username,cb) {
    var errors = [];

    if( username.length == 0)
    errors.push(messages.required);

    if( usernameMethods.minSize(username,6)){
        errors.push(messages.minimumSizeMsg)
    }
    if(! usernameMethods.maxSize(username , 10) ){
        errors.push(messages.maximumSizeMsg)
    }
    if(errors.length != 0){
       cb(errors , null)
   }else cb(null,true);
};
var number = function (number,cb) {
    var errors = [];

    if( number.length == 0)
    errors.push(messages.required);


    if(mobileNumberMethods.regExpression(number)){
        errors.push(messages.notANumber)
    }
    if(! mobileNumberMethods.numberSize(number,10)){
        errors.push(messages.totalSizeForMobile)
    }

   if(errors.length != 0){
       cb(errors , null)
   }else cb(null,true);
};

function emailValidation (email,cb){
    var errors = [];
    if( email.length == 0)
        errors.push(messages.required);


    if(! emailMethods.regExpression(email)){
        errors.push(messages.notEmail)
    }
    if( emailMethods.minSize(email,6)){
        errors.push(messages.minimumSizeMsg)
    }
    if(! emailMethods.maxSize(email , 16) ){
        errors.push(messages.maximumSizeMsg)
    }

    if(errors.length != 0){
        cb(errors , null)
    }else cb(null,true);
}
function password (password,cb){
    var errors = [];

    if( password.length == 0)
        errors.push(messages.required);
    else if(! passwordMethods.regExpression(password)){
        errors.push(messages.notPassword)
    }

    if(errors.length != 0){
        cb(errors , null)
    }else cb(null,true);
}

module.exports = {
    username : username,
    number : number,
    email : emailValidation,
    password : password
};