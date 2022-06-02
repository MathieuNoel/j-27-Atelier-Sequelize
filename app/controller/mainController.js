const {Quiz, User} = require('../models')

const mainController = {
  homePage: async (_, res) => {
    try {
      const quizzes = await Quiz.findAll({include: ["author"]});       
      res.render('index', {quizzes});      
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = mainController