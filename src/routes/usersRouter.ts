import {Router} from "express";
import {getUserById, logIn, signUp} from "../service/usersService";
import {IUser} from "../models/userModel";

const router = Router();

/* GET users listing. */
router.get('/:id', async function(req, res, next) {
  const user = await getUserById(req.params.id)

  res.send({user: user});
});

router.post("/signup", async function(req, res, next) {
  const user: IUser = req.body

  const registeredUser = await signUp(user)
  res.send({user: registeredUser})
})

router.post("/login", async function(req, res, next) {
  const user: IUser = req.body

  const loggedInUser = await logIn(user)
  res.send({user: loggedInUser})
})

export default router;
