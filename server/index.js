const express = require('express');
const {MongoClient} = require('mongodb');
const {v4: uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const uri = 'mongodb+srv://JasonLing:<password>@cluster0.et00qef.mongodb.net/?retryWrites=true&w=majority';
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello World')
})

app.post('/login', async (req, res) => {
  const client = new MongoClient(uri)
  const {email, password} = req.body

  try {
    await client.connect()
    const database = client.db('Profile-Pairs')
    const users = database.collection('users')

    const user = await users.findOne({email})
    const correctPassword = await bcrypt.compare(password, user.hashed_password)

    if (user && correctPassword) {
      const token = jwt.sign(user, email, {
        expiresIn: 60 * 24
      })
      res.status(201).json({ token, userId: user.user_id })
    }
    res.status(400).send('Invalid Information')
  } catch (err) {
    console.log(err.messsage)
  }
})

app.post('/signup', async (req, res) => {
  const client = new MongoClient(uri)
  const {email, password} = req.body

  const generatedUserId = uuidv4()
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    await client.connect()
    const database = client.db('Profile-Pairs')
    const users = database.collection('users')

    const existingUser = await users.findOne({email})

    if (existingUser) {
      return res.status(409).send('User already Exist')
    }

    const formatEmail = email.toLowerCase()

    const data = {
      user_id: generatedUserId,
      email: formatEmail,
      hashed_password: hashedPassword
    }
    const insertedUser = await users.insertOne(data)
    const token = jwt.sign(insertedUser, formatEmail, {
      expiresIn: 60 * 24
    })

    res.status(201).json({ token, userId: generatedUserId })
  } catch (err) {
    console.log(err.message)
  }
})

app.get('/users', async (req, res) => {
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


app.put('/users', async (req, res) => {
  const client = new MongoClient(uri)
  const formData = req.body.formData
  try {
    await client.connect()
    const database = client.db('Profile-Pairs')
    const users = database.collection('users')

    const query = { user_id: formData.user_id }
    const updateDocument = {
      $set: {
        first_name: formData.first_name,
        dob_day: formData.dob_day,
        dob_month: formData.dob_month,
        dob_year: formData.dob_year,
        gender: formData.gender,
        gender_interest: formData.gender_interest,
        url: formData.url,
        about: formData.about,
        matches: formData.matches
      }
    }
    const insertedUser = await users.updateOne(query, updateDocument)
    res.send(insertedUser)
    
  } finally {
    await client.close()
  }
})


app.listen(PORT, () => console.log('Server running on PORT ' + PORT))
