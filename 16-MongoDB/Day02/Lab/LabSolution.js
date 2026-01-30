use lab2

db.orders.insertMany([
    {
        _id: 0, name: "Pepperoni", size: "small", price: 19,
        quantity: 10, date: ISODate("2021-03-13T08:14:30Z")
    },
    {
        _id: 1, name: "Pepperoni", size: "medium", price: 20,
        quantity: 20, date: ISODate("2021-03-13T09:13:24Z")
    },
    {
        _id: 2, name: "Pepperoni", size: "large", price: 21,
        quantity: 30, date: ISODate("2021-03-17T09:22:12Z")
    },
    {
        _id: 3, name: "Cheese", size: "small", price: 12,
        quantity: 15, date: ISODate("2021-03-13T11:21:39.736Z")
    },
    {
        _id: 4, name: "Cheese", size: "medium", price: 13,
        quantity: 50, date: ISODate("2022-01-12T21:23:13.331Z")
    },
    {
        _id: 5, name: "Cheese", size: "large", price: 14,
        quantity: 10, date: ISODate("2022-01-12T05:08:13Z")
    },
    {
        _id: 6, name: "Vegan", size: "small", price: 17,
        quantity: 10, date: ISODate("2021-01-13T05:08:13Z")
    },
    {
        _id: 7, name: "Vegan", size: "medium", price: 18,
        quantity: 10, date: ISODate("2021-01-13T05:10:13Z")
    },
    {
        _id: 8,
        name: "Vegan",
        size: "medium",
        price: 18,
        quantity: 20
    }
])

db.likes.insertMany([
    {
        _id: 10,
        title: 'MongoDB Overview',
        description: 'MongoDB is no sql database',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 100
    },
    {
        _id: 15,
        title: 'MongoDB Overview',
        description: 'MongoDB is no sql database',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 150
    },
    {
        _id: 20,
        title: 'MongoDB Overview',
        description: 'MongoDB is no sql database',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 250
    },
    {
        _id: 25,
        title: 'NoSQL Overview',
        description: 'No sql database is very fast',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 15
    },
    {
        _id: 30,
        title: 'NoSQL Overview',
        description: 'No sql database is very fast',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 25
    },
    {
        _id: 35, title: 'NoSQL Overview',
        description: 'No sql database is very fast',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 10
    },
    {
        _id: 40,
        title: 'Neo4j Overview',
        description: 'Neo4j is no sql database',
        by_user: 'Neo4j',
        url: 'http://www.neo4j.com',
        tags: ['neo4j', 'database', 'NoSQL'],
        likes: 750
    },
    {
        _id: 45,
        title: 'Neo4j Overview',
        description: 'Neo4j is no sql database',
        by_user: 'Neo4j',
        url: 'http://www.neo4j.com',
        tags: ['neo4j', 'database', 'NoSQL'],
        likes: 250
    },
    {
        _id: 50,
        title: 'Neo4j Overview',
        description: 'Neo4j is no sql database',
        by_user: 'Neo4j',
        url: 'http://www.neo4j.com',
        tags: ['neo4j', 'database', 'NoSQL'],
        likes: 300
    }
])

db.employees.insertMany(
    [
        {
            "name": "John Doe",
            "department": "Sales",
            "salary": 60000,
            "hireDate": ISODate("2022-03-15T08:00:00Z")
        },
        {
            "name": "Alice Smith",
            "department": "Sales",
            "salary": 55000,
            "hireDate": ISODate("2022-05-20T09:30:00Z")
        },
        {
            "name": "Bob Johnson",
            "department": "Engineering",
            "salary": 70000,
            "hireDate": ISODate("2021-10-10T14:15:00Z")
        },
        {
            "name": "Sarah Brown",
            "department": "Sales",
            "salary": 58000,
            "hireDate": ISODate("2022-08-05T11:45:00Z")
        },
        {
            "name": "David Lee",
            "department": "Engineering", "salary": 72000,
            "hireDate": ISODate("2022-01-25T16:30:00Z")
        },
        {
            "name": "Emily Taylor",
            "department": "Engineering",
            "salary": 68000,
            "hireDate": ISODate("2021-12-10T08:30:00Z")
        },
        {
            "name": "Olivia Wilson",
            "department": "Sales",
            "salary": 59000,
            "hireDate": ISODate("2022-09-15T10:00:00Z")
        }
    ]
)

db.sales.insertMany(
    [
        {
            "product": "Widget",
            "quantity": 10,
            "price": 25.0,
            "date": ISODate("2018-12-15T08:00:00Z")
        },
        {
            "product": "Gadget",
            "quantity": 5,
            "price": 50.0,
            "date": ISODate("2019-03-20T14:30:00Z")
        },
        {
            "product": "Widget",
            "quantity": 8,
            "price": 25.0,
            "date": ISODate("2020-05-01T10:15:00Z")
        },
        {
            "product": "Gadget",
            "quantity": 3,
            "price": 50.0,
            "date": ISODate("2020-09-10T16:45:00Z")
        },
        {
            "product": "Accessory",
            "quantity": 15, "price": 10.0,
            "date": ISODate("2021-02-20T09:30:00Z")
        },
        {
            "product": "Widget",
            "quantity": 12,
            "price": 30.0,
            "date": ISODate("2022-04-05T11:45:00Z")
        },
        {
            "product": "Gadget",
            "quantity": 7,
            "price": 55.0,
            "date": ISODate("2023-01-10T14:30:00Z")
        },
        {
            "product": "Accessory",
            "quantity": 20,
            "price": 12.0,
            "date": ISODate("2023-04-15T09:30:00Z")
        }
    ])

db.inventory.insertMany([
    {
        item: "journal",
        qty: 25,
        tags: ["blank", "red"]
    },
    {
        item: "notebook",
        qty: 85,
        tags: ["ssl", "security"]
    },
    {
        item: "paper",
        qty: 50,
        tags: ["ssl"]
    },
    {
        item: "planner",
        qty: 85,
        tags: ["security", "ssl", "important"]
    },
    {
        item: "postcard",
        qty: 10
    }
])

db.inventory.insertOne({
    item: "paper",
    qty: 40,
    tags: ["ssl", "security", "network"],
    size: {
        h: 10,
        w: 20,
        uom: "cm"
    },
    price: 120,
    quantity: 5
})

db.sales.insertMany([
    {
        product: "router",
        quantity: 5,
        price: 120,
        saleDate: ISODate("2021-06-01")
    },
    {
        product: "router",
        quantity: 3,
        price: 120,
        saleDate: ISODate("2022-03-15")
    },
    {
        product: "switch",
        quantity: 4,
        price: 80,
        saleDate: ISODate("2020-11-20")
    }
])

db.employees.insertMany([
    {
        name: "Ali",
        department: "IT",
        salary: 6000
    },
    {
        name: "Sara",
        department: "IT",
        salary: 7000
    },
    {
        name: "Omar",
        department: "HR",
        salary: 5000
    }
])

db.likes.insertMany([
    {
        title: "Mongo Basics",
        likes: 120
    },
    {
        title: "Mongo Basics",
        likes: 80
    },
    {
        title: "Aggregation Guide",
        likes: 200
    }
])


//=================================================== Lab Solution ==============================================================//

// 1-Find documents where the "tags" field exists.
db.inventory.find(
    { "tags": { "$exists": true } },
)

// 2-Find documents where the "tags" field does not contain values "ssl" or "security."
db.inventory.find(
    {
        "tags": {
            "$nin": ["ssl", "security"]
        }
    },
    //    {
    //        item: 0
    //    }
)

// 3-Find documents where the "qty" field is equal to 85.
db.inventory.find(
    {
        "qty": { "$eq": 85 }
    }
)

// 4-Find documents where the "tags" array contains all of the values [ssl, security] using the
// `$all` operator.

db.inventory.find(
    {
        "tags": {
            "$all": ["ssl", "security"]
        }
    }
)

// a. Question:
// If you need to find only the two values "ssl" and "security", what change would you
// make to your query?

db.inventory.find(
    {
        "tags": {
            "$all": ["ssl", "security"],
            "$size": 2
        }
    }, {
        _id: 0,
    }
)

// 5-Find documents where the "tags" array has a size of 3.
db.inventory.find(
    {
        "tags": {
            "$size": 3
        }
    }
)

// 6-Update the "item" field in the "paper" document, update "size.uom" to "meter" and using the
// `$currentDate` operator.


//db.inventory.insertOne({
//  item: "paper",
//  qty: 40,
//  tags: ["ssl", "security", "network"],
//  size: {
//    h: 10,
//    w: 20,
//    uom: "cm"
//  },
//  price: 120,
//  quantity: 5
//})

//find the paper document
db.inventory.updateOne({
    "item": "paper",
    "qty": 40
},
    {
        "$set": {
            "item": "updatedItem",
            "size.uom": "meter"
        }
        , "$currentDate": { updatedAt: true }
    })

db.inventory.find();


// a. Also, use the upsert option (within updateOne)and change filter condition
// item:”laptopDevice”.

db.inventory.updateOne({
    "item": "router"//no item called laptop so i have used router
},
    {
        "$set": {
            "item": "laptopDevice",
            "size.uom": "meter"
        }
    }, { upsert: true })

db.inventory.find();

// b. Use the $setOnInsert operator to add new data if an insert occurs.

db.inventory.updateOne({
    "item": "newItem"
},
    {
        "$set": {
            "item": "addedItemUsingSetOnInsert",
        },
        "$setOnInsert": { dataSource: "addedToday" }
    }, { upsert: true })

db.inventory.find();

// c. Try using the updateMany operation.

db.inventory.find({ "qty": 85 });

db.inventory.updateMany(
    {
        "qty": 85
    },
    {
        "$set": {
            "tags.0": "updated"// to change the first element in the tags arr
        }
    }
)

db.inventory.find({ "qty": 85 });


//d. Try using the `replaceOne` operation.
db.inventory.replaceOne({
    "item": "notebook"
}, {
        "item": "replaced",
        "qty": 70,
        "tags": [
            "ssl",
            "security"
        ]
    })


db.inventory.find({ "qty": 70 });


// 7. Insert a document with incorrect field names "neme" and "ege," then rename them to
// "name" and "age."


db.employees.find()
db.employees.insertOne({
    "neme": "sayed",
    "ege": 22
})

db.employees.updateOne({
    "neme": "sayed"
},
    {
        "$rename": {
            "neme": "name",
            "ege": "age"
        }
    })

db.employees.find()


// 8. Try to reset any document field using the `$unset` function.

db.employees.updateOne(
    {
        "age": 22
    },
    {
        "$unset": {
            "name": ""
        }
    }
)

db.employees.find()

// 9. Try update operators like `$inc`, `$min`, `$max`, and `$mul` to modify document fields.

db.employees.updateOne(
    { name: "Ali" },
    { $set: { overtime: 10 } }
)

db.employees.updateOne(
    { name: "Sara" },
    { $set: { overtime: 15 } }
)

db.employees.updateOne(
    { name: "Omar" },
    { $set: { overtime: 5 } }
)


db.employees.find()


//Use $max on the field: overtime
//sets the field to the given value only if it’s greater than the current value.
db.employees.updateOne({
    "name": "Omar"
},
    {
        "$max": {
            "overtime": 10
        }
    })

db.employees.find({ "name": "Omar" })


//Use $min on the field: salary
//sets the field to the given value only if it’s less than the current value.
db.employees.updateOne({
    "name": "John Doe"
}, {
        "$min": {
            "salary": 50000
        }
    })


db.employees.find({ "name": "John Doe" })

// Use $inc on the field: age
db.employees.updateOne({
    "age": 22
}, {
        "$inc": {
            "age": 1
        }
    })

db.employees.find()


// Use $mul on the fields: quantity and price
db.sales.find()

db.sales.updateOne({
    "product": "Gadget"
}, {
        "$mul": {
            "quantity": 2,
            "price": 1.5
        }
    })

db.sales.find()


// 10. Calculate the total revenue for product from sales collection documents within the date range
// '01-01-2020' to '01-01-2023' and then sort them in descending order by total revenue.
// a. Total Revenue= Sum (Quantity * Price)


db.sales.aggregate([{
    // stage 1-$match date range
    "$match": {
        "date": {
            $gte: ISODate("2020-01-01"),
            $lte: ISODate("2023-01-01")
        }
    }
},
{
    // stage 2-group them by total revenue
    $group: {
        _id: "$product",
        totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }
    }
},
{
    $sort: { totalRevenue: -1 }
}])

// 11. Calculate the average salary for employees for each department from the employee’s
// collection.

//db.employees.insertMany([
//    {
//        name: "Ali",
//        department: "IT",
//        salary: 6000
//    },
//    {
//        name: "Sara",
//        department: "IT",
//        salary: 7000
//    },
//    {
//        name: "Omar",
//        department: "HR",
//        salary: 5000
//    }
//])


db.employees.aggregate([{
    "$group":{
        _id:"$department",
        avgSalary: { $avg: "$salary" }
    }
}])




//12. Use likes Collection to calculate max and min likes per title

//db.likes.insertMany([
//    {
//        title: "Mongo Basics",
//        likes: 120
//    },
//    {
//        title: "Mongo Basics",
//        likes: 80
//    },
//    {
//        title: "Aggregation Guide",
//        likes: 200
//    }
//])

db.likes.aggregate([
  {
    $group: {
      _id: "$title",
      maxLikes: { $max: "$likes" },
      minLikes: { $min: "$likes" }
    }
  }
])






