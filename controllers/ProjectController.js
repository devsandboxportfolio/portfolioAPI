const Project = require('../models/Project')

exports.list = (req, res, next) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(error => res.status(400).json("ERROR: " + error))
}

exports.view = (req, res, next) => {
  const {type1, param1, type2, param2, type3, param3} = req.params
  var params = {}

  params[type1] = param1

  if (typeof(type2) !== 'undefined' && type2 !== null && type2 !== '') params[type2] = param2
  if (typeof(type3) !== 'undefined' && type3 !== null && type3 !== '') params[type3] = param3

  Project.findOne(params)
    .then(project => res.json(project))
    .catch(error => res.status(400).json("ERROR: " + error))
}

exports.create = (req, res, next) => {
  const newProject = new Project({...req.body})

  newProject.save()
    .then(project => res.json(project))
    .catch(error => res.status(400).json('Error: ' + error))
}

exports.update = (req, res, next) => {
  const {projectId} = req.params

  Project.findByIdAndUpdate(projectId, {...req.body})
    .then(() => res.json(`Project ${projectId} Successfully updated`))
    .catch(error => res.status(400).json('Error: ' + error))
}

exports.delete = (req, res, next) => {
  const {projectId} = req.params

  Project.deleteOne({_id: projectId})
    .then(() => res.json(`Project ${projectId} successfully deleted`))
    .catch(error => res.status(400).json("Error" + error))
}