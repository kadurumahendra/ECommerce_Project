import express from "express";
import {getAllUsers, getUserById, updateUser, deletedUser} from "../controllers/userController.js";
import authentication from "../middlewares/authMiddleware.js";
import role from "../middlewares/roleMiddleware.js"

const router = express.Router();
// router.post("/", createUser);

router.get("/",authentication,role("admin"), getAllUsers);
router.get("/:id",authentication,role("admin"), getUserById);
router.put("/:id",authentication,role("admin"), updateUser)
router.delete("/:id", authentication, role("admin"),deletedUser)

export default router;