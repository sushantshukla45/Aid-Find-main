import express from "express";
import {
    adminLogin,
    adminSignup,
    deleteUser,
    getAllRequests,
    getAllUsers,
} from "../controller/admin.controller.js";
import { isAdmin, protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", adminSignup);
router.post("/login", adminLogin);

// Admin-only routes
router.get("/users", protect, isAdmin, getAllUsers);
router.get("/requests", protect, isAdmin, getAllRequests);
router.delete("/users/:id", protect, isAdmin, deleteUser);

export default router;