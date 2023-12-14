const express = require('express')

const postController = require('../controllers/post.controllers');

const router = express.Router();

router.post("/", postController.save);
router.get("/:id", postController.show);
router.get("getAll", postController.index);

module.exports = router;