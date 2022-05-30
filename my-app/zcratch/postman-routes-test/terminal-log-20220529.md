```
Last login: Tue May 24 17:29:55 on ttys007
cd Documents
cd %                                                                            Han-MBPro-10% cd Documents
Han-MBPro-10% cd antra
Han-MBPro-10% ls
AngularTrainingBackEnd	json-server
FRE-Training-04252022	todo-list-JSON-server
Han-MBPro-10% cd AngularTrainingBackEnd
Han-MBPro-10% npm start

> start
> nodemon index.js

[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Listening on port 4231...
Connected to mongodb+srv://AntraShare:antrashare2022@antrashare.z1kmw.mongodb.net/AntraShare?retryWrites=true&w=majority...
^C
Han-MBPro-10% npm start

> start
> nodemon index.js

[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Listening on port 4231...
Connected to mongodb+srv://AntraShare:antrashare2022@antrashare.z1kmw.mongodb.net/AntraShare?retryWrites=true&w=majority...
{ id: '6205f0d8d5cf1c22aad4158b' }
teambestdevs@gmail.com
nobi@gmail.com
{ id: '624aa7beb853a430a40a1592' }
{ id: '6205e49f223876263058315a' }
{ id: 'sfgbss' }
/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:4719
  const castError = new CastError();
                    ^

CastError: Cast to ObjectId failed for value "sfgbss" (type string) at path "_id" for model "UserProfile"
    at model.Query.exec (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:4719:21)
    at model.Query.Query.then (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:4818:15)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5) {
  messageFormat: undefined,
  stringValue: '"sfgbss"',
  kind: 'ObjectId',
  value: 'sfgbss',
  path: '_id',
  reason: BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
      at new BSONTypeError (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/bson/lib/error.js:41:28)
      at new ObjectId (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/bson/lib/objectid.js:67:23)
      at castObjectId (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/cast/objectid.js:24:12)
      at ObjectId.cast (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schema/objectid.js:245:12)
      at ObjectId.SchemaType.applySetters (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1189:12)
      at ObjectId.SchemaType._castForQuery (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1623:15)
      at ObjectId.SchemaType.castForQuery (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1613:15)
      at ObjectId.SchemaType.castForQueryWrapper (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1590:20)
      at cast (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/cast.js:344:32)
      at model.Query.Query.cast (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:5141:12),
  valueType: 'string'
}
[nodemon] app crashed - waiting for file changes before starting...
^C
Han-MBPro-10% npm start

> start
> nodemon index.js

[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Listening on port 4231...
Connected to mongodb+srv://AntraShare:antrashare2022@antrashare.z1kmw.mongodb.net/AntraShare?retryWrites=true&w=majority...
{ id: 'sfgbss' }
/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:4719
  const castError = new CastError();
                    ^

CastError: Cast to ObjectId failed for value "sfgbss" (type string) at path "_id" for model "UserProfile"
    at model.Query.exec (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:4719:21)
    at model.Query.Query.then (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:4818:15)
    at processTicksAndRejections (node:internal/process/task_queues:96:5) {
  messageFormat: undefined,
  stringValue: '"sfgbss"',
  kind: 'ObjectId',
  value: 'sfgbss',
  path: '_id',
  reason: BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
      at new BSONTypeError (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/bson/lib/error.js:41:28)
      at new ObjectId (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/bson/lib/objectid.js:67:23)
      at castObjectId (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/cast/objectid.js:24:12)
      at ObjectId.cast (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schema/objectid.js:245:12)
      at ObjectId.SchemaType.applySetters (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1189:12)
      at ObjectId.SchemaType._castForQuery (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1623:15)
      at ObjectId.SchemaType.castForQuery (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1613:15)
      at ObjectId.SchemaType.castForQueryWrapper (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1590:20)
      at cast (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/cast.js:344:32)
      at model.Query.Query.cast (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:5141:12),
  valueType: 'string'
}
[nodemon] app crashed - waiting for file changes before starting...
^C
Han-MBPro-10% npm start

> start
> nodemon index.js

[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Listening on port 4231...
Connected to mongodb+srv://AntraShare:antrashare2022@antrashare.z1kmw.mongodb.net/AntraShare?retryWrites=true&w=majority...
{ id: 'aetbaebaeb' }
/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:4719
  const castError = new CastError();
                    ^

CastError: Cast to ObjectId failed for value "aetbaebaeb" (type string) at path "_id" for model "UserProfile"
    at model.Query.exec (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:4719:21)
    at model.Query.Query.then (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:4818:15)
    at processTicksAndRejections (node:internal/process/task_queues:96:5) {
  messageFormat: undefined,
  stringValue: '"aetbaebaeb"',
  kind: 'ObjectId',
  value: 'aetbaebaeb',
  path: '_id',
  reason: BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
      at new BSONTypeError (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/bson/lib/error.js:41:28)
      at new ObjectId (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/bson/lib/objectid.js:67:23)
      at castObjectId (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/cast/objectid.js:24:12)
      at ObjectId.cast (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schema/objectid.js:245:12)
      at ObjectId.SchemaType.applySetters (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1189:12)
      at ObjectId.SchemaType._castForQuery (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1623:15)
      at ObjectId.SchemaType.castForQuery (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1613:15)
      at ObjectId.SchemaType.castForQueryWrapper (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/schematype.js:1590:20)
      at cast (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/cast.js:344:32)
      at model.Query.Query.cast (/Users/stephenhanjaya/Documents/antra/AngularTrainingBackEnd/node_modules/mongoose/lib/query.js:5141:12),
  valueType: 'string'
}
[nodemon] app crashed - waiting for file changes before starting...
^C
Han-MBPro-10%
Han-MBPro-10% npm start

> start
> nodemon index.js

[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Listening on port 4231...
Connected to mongodb+srv://AntraShare:antrashare2022@antrashare.z1kmw.mongodb.net/AntraShare?retryWrites=true&w=majority...
aetbaebaeb
[Error [ValidationError]: "password" is required] {
  _original: {
    name: 'Stephen AngularSis',
    userName: 'stephenangularsis',
    userEmail: 'trynopassword@angularsis.com',
    userRole: 'user',
    age: 21,
    gender: 'King',
    phone: 789
  },
  details: [
    {
      message: '"password" is required',
      path: [Array],
      type: 'any.required',
      context: [Object]
    }
  ]
}
[Error [ValidationError]: "userEmail" is required] {
  _original: {
    name: 'Stephen AngularSis',
    userName: 'trynoemail',
    password: 'Password123',
    userRole: 'user',
    age: 21,
    gender: 'King',
    phone: 789
  },
  details: [
    {
      message: '"userEmail" is required',
      path: [Array],
      type: 'any.required',
      context: [Object]
    }
  ]
}
[Error [ValidationError]: "_id" is not allowed] {
  _original: {
    _id: 1,
    name: 'Stephen AngularSis',
    userName: 'stephenangularsis',
    userEmail: 'trywithmyown_id@angularsis.com',
    password: 'Password123',
    userRole: 'user',
    age: 21,
    gender: 'King'
  },
  details: [
    {
      message: '"_id" is not allowed',
      path: [Array],
      type: 'object.unknown',
      context: [Object]
    }
  ]
}
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Listening on port 4231...
Connected to mongodb+srv://AntraShare:antrashare2022@antrashare.z1kmw.mongodb.net/AntraShare?retryWrites=true&w=majority...
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Listening on port 4231...
Connected to mongodb+srv://AntraShare:antrashare2022@antrashare.z1kmw.mongodb.net/AntraShare?retryWrites=true&w=majority...
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Listening on port 4231...
Connected to mongodb+srv://AntraShare:antrashare2022@antrashare.z1kmw.mongodb.net/AntraShare?retryWrites=true&w=majority...
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Listening on port 4231...
Connected to mongodb+srv://AntraShare:antrashare2022@antrashare.z1kmw.mongodb.net/AntraShare?retryWrites=true&w=majority...
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Listening on port 4231...
Connected to mongodb+srv://AntraShare:antrashare2022@antrashare.z1kmw.mongodb.net/AntraShare?retryWrites=true&w=majority...

```
