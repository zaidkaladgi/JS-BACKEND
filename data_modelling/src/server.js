

/*
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

console.log(studentSchema);
*/

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        default: "Not provided"
    },

    isActive: {
        type: Boolean,
        default: true
    }
});

const Student = mongoose.model("Student", studentSchema);

const student1 = new Student({
    name: "Zaid",
    age: 21,
    email: "zaid@gmail.com"
});

console.log("Student Details:");
console.log(student1);

console.log("Phone:", student1.phone);
console.log("Active:", student1.isActive);

student1.validate()
    .then(() => {
        console.log("Validation successful!");
    })
    .catch((error) => {
        console.log("Validation failed!");
        console.log(error.message);
    });
