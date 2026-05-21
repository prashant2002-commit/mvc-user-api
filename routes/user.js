const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUserById,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(handleGetAllUsers).post(handleCreateUserById);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;



















//routes
// router.get('/users',async (req,res)=>{
//     const allDbUsers =await  user.find({})
//     const html = `<ul>
//             ${allDbUsers.map((user)=>{
//                 return  `<li>${user.first_name} - ${user.email}</li> `  }).join('')}
//         </ul>
//     `;
//     res.send(html)
// })
