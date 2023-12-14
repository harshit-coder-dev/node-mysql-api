const models = require("../models")


const save = (req, res) => {
    console.log("------");
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: 1
    }

    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post created successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    })
}

const index = (req, res) => {
    models.Post.findAll().then(result => {
        res.status(200).json(result)
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    })
}


const show = (req, res) => {
    const id = req.params.id;

    models.Post.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    })
}

module.exports = {
    save: save,
    show: show,
    index: index
}