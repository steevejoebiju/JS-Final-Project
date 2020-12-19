const Course = require('../models/course');
const User = require('../models/user');

exports.index = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
}

exports.show = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  console.log(req.body);

  try {
    const { course, professor, grade } = req.body;
    const user = await User.findById(req.user._id)

    const co = await Course.create({
      course,
      professor,
      grade
    });
    res.status(200).json({message: 'Course was created successfully', status: 'success', course: co});
  } catch (error) {
    next(error);
  }
}

exports.update = async (req, res, next) => {
  try {
    const { _id, course, reason, date } = req.body;
    const co = await Course.findOneAndUpdate({ _id }, {
        course,
        professor,
        grade
    });
    res.status(200).json({message: 'Course was updated successfully', status: 'success', course: co});
  } catch (error) {
    next(error);
  }
}

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Course.findOneAndDelete({ _id });
    res.status(200).json({message: 'Course was deleted successfully', status: 'success'});
  } catch (error) {
    next(error);
  }
}

exports.search = async (req, res, next) => {
  // Quick and dirty search algo
  Object
    .entries(req.query)
    .map(
      ([k, v]) => req.query[k] = new RegExp(`${v.split(/\s/).join('|')}`, 'gi')
    );
  console.log(req.query);

  try {
    const courses = await Course.find(req.query);
    res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
}