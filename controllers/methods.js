/**
 * Created by Santhosh on 03-09-2016.
 */
var validations = {
    username : {
        minSize : minimumSize,
        maxSize : maximumSize
    },email : {
        minSize : minimumSize,
        maxSize : maximumSize,
        regExpression :  checkEmail
    },password : {
        minSize : minimumSize,
        maxSize : maximumSize,
        regExpression :  checkPassword
    },mobileNumber : {
        regExpression :  checkNumber,
        numberSize : checkSize
    }
}

function sizeOfInput(input,minSize,maxSize){
    if(minSize <= input.length <= maxSize) return true;
    else if(minSize > input.length) return -1;
    else if(input.length > maxSize) return 1;
}

function minimumSize(input , limit) {
    return input.length < limit
}
function maximumSize(input ,limit){
    return input.length <= limit
}

function checkEmail(email){
    return (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email);
}

function checkNumber(number){
    return isNaN(number)
}

function checkSize(number,limit){
    return number.length == limit
}
function checkPassword(password) {
    return (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/).test(password);

}

module.exports = validations;