const jwt  = require('jsonwebtoken')

const auth=(req,res)=>{
 const token = req.headers.get('Authorization')
const decoded = jwt.verify(token, 'shhhhh');
console.log(decoded.data)
 

}