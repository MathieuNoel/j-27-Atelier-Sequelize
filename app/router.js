const express = require('express');
const router = express.Router()

const mainController = require('./controller/mainController');
const quizController = require('./controller/quizController');
const tagController = require('./controller/tagController');

router.get('/', mainController.homePage)
router.get('/quiz/:id',quizController.quizPage)
router.get('/tags', tagController.tagsPage)
router.get('/tags/:tagId', tagController.tagPage)

module.exports = router;