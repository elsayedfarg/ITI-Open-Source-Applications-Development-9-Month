use ITI_Mongo

// Before Index
db.Staff.find({ "name": "sayed" })

db.Staff.find({ "name": "sayed" }).explain() //Winningplan =>stage=>collection scan (it will scan the full tree)

db.Staff.find({ _id: 2 }).explain()///Winningplan =>stage=>index scan(because it is primary key)



// Create Index
db.Staff.createIndex({ name: 1 })// on fname ascending and it will give it index name

db.Staff.getIndexes()



// After Index
db.Staff.find({ "name": "sayed" }).explain() //Now it becomes index scan



// Drop Index
db.Staff.dropIndex("name_1")

db.Staff.createIndex({ name: 1 }, { name: "IX_EMp_FName" })//renaming the index

db.Staff.getIndexes()

db.Staff.dropIndex("IX_EMp_FName")


//========================= Create index on more than one (field) key => (compouned index)


// if you searched using the 1 key it will be index scan 

// if you searched using the 2 keys
// the first one will be index scan and the last one will be collection scan


//======================== Time to live index
db.Staff.createIndex({ "LastModified": 1 }, { expiresafter: 1 })


db.Staff.insertMany(
    [
        {
            _id: 1,
            name: "sayed",
            LastModified: ISODate("2025-01-01")
        },
        {
            _id: 2,
            name: "ahmed",
            LastModified: ISODate("2026-01-01")
        }
    ]
)


db.Staff.find()


//======================= loop
db.Staff.find({ name: { "$exists": 1 } }).forEach(function (data) {
    print("Student name: " + data.name)
})


// get configuration 

db.serverCmdLineOpts()








