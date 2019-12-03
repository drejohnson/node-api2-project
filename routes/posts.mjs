import express from "express";
import db from "../data/db.js";

const router = express.Router();

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await db.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log("The posts information could not be retrieved.", error);
    res
      .status(500)
      .json({ error: "The posts information could not be retrieved." });
  }
});

export default router;
