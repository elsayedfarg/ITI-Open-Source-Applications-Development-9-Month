use ITI_Mongo

db.Staff.find({})

db.Staff.find({ "age": 20 }, { age: 1, gender: 1 })

db.Staff.find({ "age": 20 }, { _id: 0, age: 1, gender: 1 })

db.Staff.find({ "age": 20 }, { age: 0, gender: 0 })

// Exclusoin : false
// INclusion : true

db.Staff.find({ "name": "ahmed" })

// used for composite and must use ""
//db.Staff.find({ "carrier.name": "ahmed" })

// get all name
db.Staff.find({}, { name: 1 })

// get all documents where the name is not null
db.Staff.find({ "name": { $exists: true } }, { name: 1, _id: 0 })

db.Staff.find({ "name": { $exists: false } }, { name: 1 })

// get age>=22
db.Staff.find({ "age": { "$gte": 22 } }, { _id: 0 })

// get age = 20 or 22 (use (in) if you are working on the same field
db.Staff.find({ "age": { "$in": [20, 22] } }, { _id: 0 })

db.Staff.find({ "name": { "$in": ["ahmed", "mohamed"] } })


// name must be ahmed and mohamed at the same time
db.Staff.find({ "name": { "$all": ["ahmed", "mohamed"] } })

//========================== Logical operators ======================//
//age in 20,25
//and
//name ahmed
db.Staff.find({
    "$and": [
        {
            //age in 20,25
            "age": { "$in": [20, 25] }
        },
        {
            //name ahmed
            "name": "ahmed"
        }
    ]
})


//====================================================================//
db.Staff.find({ "name": { $regex: "(?i)med" } })


//================== Update =========================//
db.employee.insertMany([
    { _id: 1, name: "noha", age: 15 },
    { _id: 2, name: "ali", age: 25 },
    { _id: 3, name: "ahmed", dep: "SW" }
])

db.employee.find({ _id: 2 })

//db.employee.updateOne({filter=where},{update},{options?})

db.employee.updateOne({
    _id: 2
},
    {
        $set: {
            age: 35
        }
    }
)

db.employee.find({ _id: 2 })

db.employee.find({})


// update value
db.employee.updateMany(
    {
        "dep": "SW"
    },
    {
        $set: {
            "dep": "testing"
        }
    }
)

db.employee.find({})


// update field
db.employee.updateMany(
    {
    },
    {
        $rename: {
            "dep": "department"
        }
    }
)

db.employee.find({})


// remove field (column)
db.employee.updateMany(
    {
        "_id": 3
    },
    {
        $unset: {
            "department": ""
        }
    }
)


db.employee.find({})

// upsert(update or insert)
// if the condition matched update
// else if the condition not matched then insert
db.employee.updateOne(
    {
        "_id": 100
    },
    {
        $set: {
            "name": "sayed"
        }
    },
    {
        upsert: true
    }
)

db.employee.find({})

//======================= Quiz ========================//
db.quiz.insertMany([
    { _id: 1, name: "eman", age: 15 },
    { _id: 2, email: "sayed123@g.com" }
])

db.quiz.updateMany({},
    {
        $set: {
            status: "A"
        }
    })

db.quiz.find()


db.quiz.updateMany({ _id: 5 }, {
    $set: {
        status: "VIP"
    }
},
    {
        upsert: true
    }
)

db.quiz.find()


db.quiz.updateMany({ _id: 10 },
    {
        $set: { status: "VIP" },
        $setOnInsert: { age: 40 }
    },
    {
        upsert: true
    }
)

db.quiz.find()


//======================== aggregation pipeline =========================//

//========== find total salary for sales department

// 1-find using where condition
//db.employees.find({ "department": "Sales" })

// 2-group (one department , total salary)

db.employees.aggregate([{
    //stage1  1-find using where condition
    "$match": {
        "department": "Sales"
    }
},
{
    //stage2 2-group (one department , total salary)
    "$group": {
        //        _id:"department", this will give the output as the key name(department)
        _id: "$department",
        "totalSalary": { "$sum": "$salary" }// get the salary values using ($) not the col name (key)
    }
}
])


//========== avg salaries for each department then sort desc

// 1-no where condition ( no stage 1 which is match )

// 2-group (each department , avg salary)

db.empoyees.aggregate([{},
{
    // stage 2-group (department,avg)
    "$group": {
        _id: "$department",
        "avgSalary": { $avg: "$salary" }
    }
}, {
    $sort: {
        avgSalary: -1
    }
}])





















