const user = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await user.find({});

  res.setHeader("X-myname", "prashant kumar"); //custom header: always add x to custom header
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  // const id = Number(req.params.id)  //params is used for dynamic routing
  // user = users.find((user)=>user.id === id)

  const User = await user.findById(req.params.id);
  if (!User) {
    res.status(404).json("request not found");
  }
  return res.json(User);
}

async function handleUpdateUserById(req, res) {
  //update an existing user
  await user.findByIdAndUpdate(req.params.id, { last_name: "khanna" });
  return res.json({ msg: "success" });
}

async function handleDeleteUserById(req, res) {
  //delete a user
  //    const id = Number(req.params.id)
  //  let users2 = users.filter((user)=> user.id !== id)
  //  fs.writeFile('./MOCK_DATA.json',JSON.stringify(users2),((err,result)=>{
  //     return res.json({status : "deleted", id: id})
  //     users = users2
  //   }))
  await user.findByIdAndDelete(req.params.id);
  return res.json({ msg: "success" });
}

async function handleCreateUserById(req, res) {
  //create new user
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "all fields are required" });
  }
  // users.push({...body, id: users.length+1})
  // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),((err,result)=>{
  //     return res.status(201).json({status : "pending", id: users.length})
  // }))
  const result = await user.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log(result);
  return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUserById,
};
