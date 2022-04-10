const Todo = require('../models/Todo')

exports.list = (req, res) => {
    Todo.find().then((todos) => {
        res.status(200).json(todos)
    }).catch(error => res.status(400).json({error}))
}

exports.getOneItem = (req, res) => {
    Todo.findOne({_id:req.params.id}).then((todos) => {
        res.status(200).json(todos)
    }).catch(error => res.status(400).json({error}));

}
exports.postItem = (req, res) => {
    Todo.create(req.query).then((todos) => {
        res.status(200).json(todos)
    }).catch(error => res.status(400).json({error}));
}
exports.patchItem = (req, res) => {
    Todo.updateOne({_id:req.params.id},req.query).then((todos) => {
        res.status(200).json(todos)
    }).catch(error => res.status(400).json({error}));
    
}
exports.deleteItem = (req, res) => {
    Todo.deleteOne({_id:req.params.id}).then((todos) => {
        res.status(200).json(todos)
    }).catch(error => res.status(400).json({error}));
}