const { index, show, create, update, destroy, search } = require('../controllers/courses');

module.exports = router => {
  router.get('/courses', index);
  router.get('/courses/search', search);
  router.get('/courses/:id', show);
  router.post('/courses', create);
  router.post('/courses/update', update);
  router.post('/courses/destroy', destroy);
};