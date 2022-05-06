const express = require('express')
const connectDB = require('./db/db')
const jwt  = require('jsonwebtoken')
const User = require('./models/Users')
const Topic = require('./models/Topics')
const app = express()
const PORT = 3000
app.use(express.json());

// connect to database
connectDB()


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// to register email
app.post('/email',async (req,res)=>{
    const {email,name} = req.body
    console.log(email);
    const topics = ["science","medicene","engineering","enviroment","business"]
    // create new user with email
  const user =  User({name,email})
  try{

    await user.save()
  }
  catch(err){
    console.log(err)
    res.send("provide valid fields")
  }
    

    res.json(topics)
})

// to subscribe to a topic
app.post('/subscribe/:topicName',async(req,res)=>{
    const topicId = req.params.topicName;
    // add topic to user with topic Id
    const {email} = req.body;
    const user = await User.find({email})
    user.topics
    app.save()
})

// to post a topic
app.post('/topic',async(req,res)=>{
  const {name} = req.body
  const topic = Topic({name})
  try{
    await topic.save()
    res.send('topic added')
  }catch(err){
    res.send('error')
  }

})

// to write content in topics
 app.post('/content/:topicName',async(req,res)=>{
    const {time,content} = req.body
    // console.log(req.params.topicName)
    const topic = await Topic.find({name:req.params.topicName})
    topic[0].contents.push({time,content})
  
    
    await topic[0].save() 
    console.log(time,content);
    res.send('content  added')
})

app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`)
})