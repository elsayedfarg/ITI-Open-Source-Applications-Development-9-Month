// 1-Create a database named "ITI_Mongo"
use ITI_Mongo;

// 2-Create a collection named "Staff"
// 3-Insert one document into the "Staff" collection: {_id,name,age,gender,department}
db.Staff.insertOne({
    "_id": 1,
    "name": "sayed",
    "age": 22,
    "gender": "male",
    "department": "cs"
});

// 4-Insert many documents into the "Staff" collection
// a-Object: {_id,name,age:20,gender:"male",department}
// b-Object: {_id,name,age:25,gender:"female",managerName,department}
// c-Object: {_id,name,age:15,gender,DOB}
db.Staff.insertMany(
    [
        {
            "_id": 2,
            "name": "ahmed",
            "age": 20,
            "gender": "male",
            "department": "cs"
        },
        {
            "_id": 3,
            "name": "sara",
            "age": 25,
            "gender": "female",
            "managerName": "AhmedMohamed",
            "department": "ai"
        },
        {
            "_id": 4,
            "name": "khaled",
            "age": 15,
            "gender": "male",
            "DOB": "2008-05-10"
        }
    ]
)

// 5-Query to find data from the "Staff" collection
// a-Find all documents
db.getCollection("Staff").find({})

// b-Find documents where gender is male
db.getCollection("Staff").find({ "gender": "male" });

// c-Find documents with age between 20 and 25
//    db.getCollection("Staff").find({"age">20 & "age"<25})
db.getCollection("Staff").find({
    "age": { "$gt": 20, "$lt": 25 }
});

// d-Find documents where age is 25 and gender is "female"
db.getCollection("Staff").find({ "age": 25, "gender": "female" });

// e-Find documents where age is 20 or gender is "female"
db.getCollection("Staff").find({ "$or": [{ "age": 25 }, { "gender": "female" }] });

// 6-Update one document in the "Staff" collection where age is 15, set the name to "new student"
db.getCollection("Staff").updateOne({ "age": 15 }, { $set: { "name": "new student" } })

// 7-Update many documents in the "Staff" collection, setting the department to "AI"
db.getCollection("Staff").updateMany({}, { $set: { "department": "ai" } });

// 8-Create a new collection called "test" and insert documents from Question 4
db.test.insertMany(
    [
        {
            "_id": 2,
            "name": "ahmed",
            "age": 20,
            "gender": "male",
            "department": "cs"
        },
        {
            "_id": 3,
            "name": "sara",
            "age": 25,
            "gender": "female",
            "managerName": "AhmedMohamed",
            "department": "ai"
        },
        {
            "_id": 4,
            "name": "khaled",
            "age": 15,
            "gender": "male",
            "DOB": "2008-05-10"
        }
    ]
)

// 9-Try to delete one document from the "test" collection where age is 15

db.test.insertOne({ "_id": 5, name: "ahmed", age: 15 });
db.test.insertOne({ "_id": 6, name: "eman", age: 15 });
db.test.deleteOne({"age":15},)

db.getCollection("test").find({})

// 10-try to delete all male gender
db.test.deleteMany({"gender":"male"})

// 11-Try to delete all documents in the "test" collection
db.test.deleteMany({})

