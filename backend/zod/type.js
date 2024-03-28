const zod = require("zod");

// Admin table
// username:string
// password:sring minimum 8 char
// role:string
// name:string
// email:string


// Used for signup
const signupSchema = zod.object({
  username: zod.string().min(3).max(30),
  email: zod.string().email(),
  password: zod.string().min(8),
});

const loginAdmin = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
   
});
module.exports={
  signupSchema,
    loginAdmin
}