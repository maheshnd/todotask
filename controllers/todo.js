const express = require('express');
const TodoModel = require('../models/Todo');

exports.addTask = async (req, res) => {
  const { taskName } = req.body;

  const newTask = new TodoModel({
    taskName,
  });

  const task = await newTask.save();
  res.status(200).json({
    success: true,
    data: { task },
  });
};

exports.updateTask = async (req, res) => {
  const { taskName } = req.body;
  try {
    const task = await TodoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      data: { task },
    });
  } catch (error) {
    console.log('Error while updating techs ', error.message);
    res.status(400).json({
      success: false,
      data: { error: 'Error while updating techs ' },
    });
  }
};

exports.getAllTask = async (req, res) => {
  try {
    const tasks = await TodoModel.find();
    res.status(200).json({
      success: true,
      count: tasks.length,
      data: { tasks },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: { error: 'Error while updating techs ' },
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await TodoModel.findByIdAndDelete(req.params.id);

    res.status(201).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: { error: 'Error while deleting task' },
    });
  }
};
