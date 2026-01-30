use Demo
db.employee.insertMany([
    { _id: 1, fName: "mohamed", lName: "ahmed", age: 15 },
    { _id: 2, fName: "noha", lName: "mahmoud", age: 25 },
    { _id: 3, fName: "malak", lName: "mohamed", age: 35 },
    { _id: 4, fName: "mazen", lName: "mohamed", age: 45 },
    { _id: 5, fName: "eman", lName: "ali", age: 55 }])

//Simple - Single Index

//Before Index
db.employee.find({ fName: "malak" })

db.employee.find({ _id: 2 })

db.employee.find({ fName: "malak" }).explain() //COLLSCAN

db.employee.find({ lName: "mohamed" }).explain() //COLLSCAN

db.employee.find({ _id: 2 }).explain() //IXSCAN Index Scan

//Create Index
db.employee.createIndex({ fName: 1 })
//After Index

db.employee.find({ fName: "malak" }).explain() //IXSCAN

//Get Index Info
db.employee.getIndexes()

//Drop Index
db.employee.dropIndex("fName_1")

db.employee.createIndex({ fName: 1 }, { name: "IX_Emp_FName" })

db.employee.dropIndex("IX_Emp_FName")


//Compound Index

//Befor Index
db.employee.find({ fName: "malak" }).explain() //COLLSCAN
db.employee.find({ lName: "mohamed" }).explain() //COLLSCAN
db.employee.find({ fName: "malak", lName: "mohamed" }).explain() //COLLSCAN
db.employee.find({ lName: "mohamed", fName: "malak" }).explain() //COLLSCAN

//Create Index
db.employee.createIndex({ fName: 1, lName: 1 }, { name: "IX_flName" })

//Get Index Info
db.employee.getIndexes()

//After Index
db.employee.find({ fName: "malak" }).explain()                   //IXSCAN
db.employee.find({ lName: "mohamed" }).explain()                 //COLLSCAN//
db.employee.find({ fName: "malak", lName: "mohamed" }).explain() //IXSCAN
db.employee.find({ lName: "mohamed", fName: "malak" }).explain() //IXSCAN


//Time-to-Live Index

db.eventlog.createIndex(
    { "lastModifiedDate": 1 },
    { expireAfterSeconds: 1 })

db.eventlog.insertMany([{ _id: 1, name: "eman", lastModifiedDate: ISODate("2025-01-01") },
{ _id: 2, name: "ahmed", lastModifiedDate: ISODate("2026-01-01") }])

db.eventlog.find({})

//delete
db.employee.deleteOne({})
//_id 5 (First) age : 25 => id : 1 age 25
//update
db.employee.updateMany()

//insert
db.employee.insert() //old
//find

db.employee.find({})                //
db.employee.findOneAndDelete()      //findOne + Delete
db.employee.findOneAndReplace()     //findOne + Replace

db.employee.findAndModify()         //find + Modify  (Update - Delete) //old
db.employee.findOneAndUpdate()      //findOne + Update

//drop
db.employee.deleteMany({})

db.employee.drop()


db.dropDatabase()

db.employee.find({})
//Student First Name : 


db.employee.insertOne({ _id: 6, age: 20 })

db.employee.find({ fName: { $exists: true } }).forEach(function (data) {
    print("Student First Name : " + data.fName)
})

db.serverCmdLineOpts()









