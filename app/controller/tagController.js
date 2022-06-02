const {Tag} = require('../models');

const tagController = {

  tagsPage: async (_,res) => {
    const allTags = await Tag.findAll()
    res.render('tags', {tags : allTags} )
  },

  tagPage: async (req, res) => {
    const oneTag = Number(req.params.tagId)
    try {
      const tag = await Tag.findByPk(oneTag, {
        include: [
          {association:"quizList",include:"author"}
        ]
      })
      res.render('tag', {tag})      
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = tagController;


