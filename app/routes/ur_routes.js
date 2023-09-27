const express = require('express')
const router = express.Router()

// copy the const name and the file path to new version
router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Make decision - if banning order then contingencies 
router.post('/beta/_UR/20230223/1/06reviewdate', function (req, res) {
  // Make a variable and give it the value from 'prnQuestion'
  var measures = req.session.data['measures']
    // Check whether the variable matches a condition
    if (measures) {
      // Send user to 
      res.redirect('06reviewdate');
      alert("hell");
    } else {
      // Send user to 
      res.redirect('05measureaccount_error')
    } 
})


module.exports = router
