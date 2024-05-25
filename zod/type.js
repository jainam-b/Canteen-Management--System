const zod = require("zod");

// Admin table
// username:string
// password:sring minimum 8 char
// role:string
// name:string
// email:string


// Used for signup
const createAdmin = zod.object({
  username: zod.string(),
  password: zod.string().min(8),
  role: zod.string(),
  name: zod.string(),
  email: zod.string().email(),
});
const loginAdmin = zod.object({
  username: zod.string(),
  password: zod.string().min(8),
   
});
module.exports={
    createAdmin,
    loginAdmin
}