module.exports = function (router) {

// Route by incident number
router.post('/beta/_UR/20240429/v8/20actionroute', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var currentReport = req.session.data['20240429_current_report']
    // Check whether the variable matches a condition
    if (currentReport == "incident2") {
      // Send user to 
      res.redirect('03type2')
    } else {
      res.redirect('03type')
    }
})

// Route send a letter to extra screens
router.post('/beta/_UR/20240429/v8/05letter', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var checkLetter = req.session.data['2401_actions']
  if (typeof checkLetter !== 'undefined') {
    // Check whether the variable matches a condition
    if ((checkLetter.includes("Send a letter"))) {
      // Send user to 
      res.redirect('05b_add')
    } else {
      res.redirect('09prepare_single_man')
    }
  } else {
    res.redirect('09prepare_single_man')
  }
})

// Route send a letter to extra screens
router.post('/beta/_UR/20240429/v8/05letter2', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var checkLetter = req.session.data['2401_actions2']
  if (typeof checkLetter !== 'undefined') {
    // Check whether the variable matches a condition
    if ((checkLetter.includes("Send a letter"))) {
      // Send user to 
      res.redirect('05b_add2')
    } else {
      res.redirect('09prepare_single_man2')
    }
  } else {
    res.redirect('09prepare_single_man2')
  }
})



}