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
  }
else if (contacted == "emailonly"){
  // Send user to next page
  res.redirect('/page-one-email')
}

  else {
    // Send user to ineligible page
    res.redirect('/page-one-post')
  }

})



// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/who-are-you-representing', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var representing = req.session.data['representing']

  // Check whether the variable matches a condition
  if (representing == "myself"){
    // Send user to next page
    res.redirect('/a-02-represent-myself')
  } else {
    // Send user to ineligible page
    res.redirect('/a-02-represent-others')
  }

})

// Run this code when a form is submitted to 'try ec'
router.post('/try-ec', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var tryec = req.session.data['try-ec']

  // Check whether the variable matches a condition
  if (tryec == "yes"){
    // Send user to next page
    res.redirect('/page-one')
  } else {
    // Send user to ineligible page
    res.redirect('/a-no-ec-contact')
  }

})

// Run this code when a form is submitted to 'try ec'
router.post('/rep-others', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reprelationship = req.session.data['rep-relationship']

  // Check whether the variable matches a condition
  if (reprelationship == "family-friend"){
    // Send user to next page
    res.redirect('/a-02-represent-others-01')
  } else {
    // Send user to ineligible page
    res.redirect('/a-02-represent-others-01')
  }

})
module.exports = router
