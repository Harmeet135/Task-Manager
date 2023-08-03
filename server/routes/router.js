const express = require('express');
const router = express.Router();
const Task = require('../models/userSchema');

router.post('/create', async (req, res) => {
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
        return res.status(400).json('Pleasee fill all the fields');
    }

    try {
        const newTask = new Task({
            title,
            description,
            status
        });
        await newTask.save();
        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.get('/get', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json(error);
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json('Task not found');
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(404).json(error);
    }
});

router.patch('/update/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/search/:key', async (req, res) => {
    try {
        const result = await Task.find({
            title: { "$regex": req.params.key, "$options": "i" }
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
