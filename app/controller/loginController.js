const {User, Quiz} = require('../models')

const loginController = {
  loginPage: (req, res) => {
    res.render('login')
  },

  loginForm: async (req, res, next) => {
    const userConnexion = req.body
    const connectedUser = req.session.user.find(user => user.lastname === userConnexion.lastname || user.firstname === userConnexion.firstname || user.email === userConnexion.email || user.password === userConnexion.password);
    const checkDb = await User.findOne(
      {where: {email: userConnexion.email}}
    )    
    if(!connectedUser) {
    req.session.user.push(userConnexion);
    }else if(connectedUser || checkDb){    
    try {
      const quizzes = await Quiz.findAll({include: ["author"]});       
      res.render('index', {quizzes});      
    } catch (error) {
      console.log(error)
    }  
    } else {
      res.send('Sorry, user already connected or not exist!')
    }
    
  }
}

module.exports = loginController;