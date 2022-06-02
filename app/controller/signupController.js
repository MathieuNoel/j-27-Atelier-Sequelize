const {Quiz, User} = require('../models')

const signupController= {
  signupPage: async (req, res) => {
    res.render('signup')
  },

  signupForm: async (req, res, next) => {
    const newUser = req.body
    const ifUserExist = req.session.user.find(user => user.lastname === newUser.lastname || user.firstname === newUser.firstname || user.email === newUser.email || user.password === newUser.password);
    if(ifUserExist) {
    req.session.user.push(newUser);
    User.bulkCreate(newUser)      
    try {
      const quizzes = await Quiz.findAll({include: ["author"]});       
      res.render('index', {quizzes});      
    } catch (error) {
      console.log(error)
    }  
    } else {
      res.send('Sorry, user already exist')
    }
    next()
  }
}


module.exports = signupController;