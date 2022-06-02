const {Quiz} = require('../models')

const quizController= {
  quizPage: async (req, res) => {
    const quizById = Number(req.params.id)
    try {
      const findQuiz = await Quiz.findByPk(quizById, 
        {include: [
            {association:"author"},
            {association: "questions",include: ["level", "answers"]}, 
            {association: "tags"}        
        ]}
      )
      res.render('quizz', {quiz: findQuiz})
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = quizController;