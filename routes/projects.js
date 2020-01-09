const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Project = require('../models/Project');

// @route     GET api/projects
// @desc      Get all users projects
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id }).sort({ date: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/projects
// @desc      Add new project
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Project name is required')
        .not()
        .isEmpty(),
      check('projectData', 'Project Data is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, projectData } = req.body;

    try {
      const newProject = new Project({
        name,
        projectData,
        user: req.user.id
      });

      const project = await newProject.save();

      res.json(project);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/projects/:id
// @desc      Update project
// @access    Private
router.put('/:id', auth, async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);

    if (!project) return res.status(404).json({ msg: 'Project not found' });

    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    project = await Project.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

    res.json(project);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/projects/:id
// @desc      Delete project
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);

    if (!project) return res.status(404).json({ msg: 'Project not found' });

    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Project.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
