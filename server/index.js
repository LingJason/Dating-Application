const express = require('express')
const { MongoClient } = require('mongodb')
const uri = 'mongodb+srv://JasonLing:<password>@cluster0.et00qef.mongodb.net/?retryWrites=true&w=majority'
const app = express()
const PORT = 8000

app.get('/',(req, res) => {
  res.json('Hello World')
})

app.post('/signup',(req, res) => {
  const client = new MongoClient(uri)
})

app.get('/users', async(req, res) => {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const database = client.db('Profile-Pairs')
    const users = database.collection('users')

    const returnedUsers = await users.find().toArray()
    res.send(returnedUsers)
  } finally {
    await client.close()
  }
})




app.listen(PORT, () => console.log('Server running on PORT ' + PORT))