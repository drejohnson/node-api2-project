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

// Get post by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await db.findById(id);

    if (!post)
      return res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });

    res.status(200).json(post);
  } catch (error) {
    console.log("The posts information could not be retrieved.", error);
    res
      .status(500)
      .json({ error: "The post information could not be retrieved." });
  }
});

// Get post by ID
router.get("/:id/comments", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await db.findPostComments(id);

    if (!post)
      return res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });

    res.status(200).json(post);
  } catch (error) {
    console.log("The comments information could not be retrieved.", error);
    res
      .status(500)
      .json({ error: "The comments information could not be retrieved." });
  }
});

// Create new post
router.post("/", async (req, res) => {
  const { title, contents } = req.body;
  if (!title || !contents)
    return res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });

  try {
    const newPost = await db.insert({ title, contents });
    res.status(201).json(newPost);
  } catch (error) {
    console.log("The post information could not be retrieved.", error);
    res
      .status(500)
      .json({ error: "The post information could not be retrieved." });
  }
});

// Delete post
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const removed = await db.remove(id);
    if (!removed)
      return res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });

    res.status(200).json({ message: "Post removed" });
  } catch (error) {
    console.log("The post could not be removed", error);
    res.status(500).json({ error: "The post could not be removed" });
  }
});

// Update posts
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.body)
      return res.status(500).json({ error: "The posts could not be removed" });

    const updatedPost = await db.update(id, req.body);

    if (!updatedPost)
      return res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });

    const post = await db.findById(id);
    res.status(200).json(post);
  } catch (error) {
    console.log("The post information could not be modified.", error);
    res
      .status(500)
      .json({ error: "The post information could not be modified." });
  }
});

export default router;
