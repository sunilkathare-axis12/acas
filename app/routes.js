const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'representing'
router.post('/representing', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var representing = req.session.data['representing']

  // Check whether the variable matches a condition
  if (representing == "myself"){
    // Send user to next page
    res.redirect('/page-one')
  } else {
    // Send user to ineligible page
    res.redirect('/02-others')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/page-one-email', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var contacted = req.session.data['contacted']

  // Check whether the variable matches a condition
  if (contacted == "email"){
    // Send user to next page
    res.redirect('/page-one-email')
  } else {
    // Send user to ineligible page
    res.redirect('/page-one-post')
  }

})
module.exports = router
