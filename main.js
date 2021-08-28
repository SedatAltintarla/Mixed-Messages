// Goal: Create a random message about school.


// return a ramdom num to choose 
const randomNum = num => {
    return Math.floor(Math.random() * num);
}


// The final message object
const generateMessage = () => {

    return {
        _predefinedMsg: ["I love ", "I hate ", "My favorite subject is ", "I only got A marks in ", "I always copied the homeworks of friends in "],
        _subjects: ["Math", "Sports", "German", "English", "Geography", "Music", "Art", "Chemics", "Biology"],

        get predefinedMsg() {
            return this._predefinedMsg;
        },

        get subjects() {
            return this._subjects;
        }

    }
}

const createMessage = () => {
    const newMessage = generateMessage();
    const message = newMessage.predefinedMsg[randomNum(newMessage.predefinedMsg.length)] + newMessage.subjects[randomNum(newMessage.subjects.length)];
    console.log("Your message: " + message);
};

createMessage();
