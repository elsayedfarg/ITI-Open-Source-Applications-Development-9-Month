//Schema Validation
use Demo

db.employee.insertOne({ _id: 10, address: "zag" })

db.createCollection("student", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Student Required Input",
            required: ["name", "age", "code"],
        }
    }
})

db.student.insertOne({ _id: 1, address: "zag", age: 15, name: "mona", code: "abc" })

db.student.insertOne({ _id: 2, age: "xy", name: 123, code: "abc" })

db.createCollection("student", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Student Object Validation",
            required: ["address", "major", "name", "year"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "'name' must be a string and is required"
                },
                year: {
                    bsonType: "int",
                    minimum: 2017,
                    maximum: 3017,
                    description: "'year' must be an integer in [ 2017, 3017 ] and is required"
                },
                gpa: {
                    bsonType: ["double", "int"],
                    description: "'gpa' must be a double if the field exists"
                }
            }
        }
    }
})
//gpa : Optional , double ,int
//name :required + data type
//year : required + data type + value range
//address : required
//major : required

db.student.insertOne({ _id: 1, age: 38, address: "alex", major: "CS", name: "ahmed", year: 2026 })

db.student.insertOne({ _id: 2, gpa: 3, age: 38, address: "alex", major: "CS", name: "ahmed", year: 2026 })

db.runCommand({
    collMod: "student",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["username", "password"],
            properties: {
                username: {
                    bsonType: "string",
                    description: "username must be a string and is required"
                },
                password: {
                    bsonType: "string", minLength: 6,
                    description: "must be a string of at least 6 characters, and is required"
                }
            }
        }
    }
})
db.student.find()

db.student.insertOne({ _id: 3, gpa: 3, age: 38, address: "alex", major: "CS", name: "ahmed", year: 2026 })

db.runCommand({
    collMod: "student",
    validator: {}
})

db.student.insertOne({ _id: 3, gpa: 3, age: 38, address: "alex", major: "CS", name: "ahmed", year: 2026 })
