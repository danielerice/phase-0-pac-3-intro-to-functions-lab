let string

function shout (string) {
    //receives one argument and returns it in all caps
    return string.toUpperCase();
}

function whisper (string) {
    //receives one argument and returns it in all lowercase
    return string.toLowerCase();
}

function logShout (string) {
    //takes a string argument and logs it in all caps using console.log()
    console.log(string.toUpperCase());
}

function logWhisper (string) {
    //takes a string argument and logs it in all lowercase using console.log()
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    //returns "I can't hear you!" if `string` is lowercase
    //returns "YES INDEED!" if `string` is uppercase
    //returns "I would love to!" if `string` is "Let's have dinner together!"`
       if (string===string.toLowerCase()){
            return `I can't hear you!`;
       }
        else if (string===string.toUpperCase()){
            return `YES INDEED!`
        }
        else if  (string===`Let's have dinner together!`){
            return `I would love to!`
}

}
