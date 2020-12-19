const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true
  },
  professor: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: false
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', CourseSchema);