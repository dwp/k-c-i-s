console.log ('test outside')

module.exports = function (router) {

// Route by incident number
router.post('/beta/_UR/20241001/v8/20actionroute', (req, res) => {
  // Make a variable and give it the value from '20240429_current_report'
  var currentReport = req.session.data['20240429_current_report']
    // Check whether the variable matches a condition
    if (currentReport == "incident2") {
      // Send user to 
      res.redirect('03type2')
    } else {
      res.redirect('03type')
    }
})

// Route send a letter to upload files question
router.post('/beta/_UR/20241001/v8/05letter', (req, res) => {
  // Make a variable and give it the value from '2401_actions'
  var checkLetter = req.session.data['2401_actions']
  if (typeof checkLetter !== 'undefined') {
    // Check whether the variable matches a condition
    if ((checkLetter.includes("Send a letter"))) {
      // Send user to 
      res.redirect('05d_wholetter')
    } else {
      res.redirect('09prepare_single_man')
    }
  } else {
    res.redirect('09prepare_single_man')
  }
})


// Route send a letter to extra screens
router.post('/beta/_UR/20241001/v8/05letter2', (req, res) => {
  console.log ('test inside letter')
  // Make a variable and give it the value from '2401_actions2'
  var checkLetter = req.session.data['2401_actions2']
  if (typeof checkLetter !== 'undefined') {
    // Check whether the variable matches a condition
    if ((checkLetter.includes("Send a letter"))) {
      // Send user to 
      res.redirect('05d_wholetter2')
    } else {
      res.redirect('09prepare_single_man2')
    }
  } else {
    res.redirect('09prepare_single_man2')
  }
})

// Route around upload if upload add files = no 
router.post('/beta/_UR/20241001/v8/5c_upload2', (req, res) => {
  // Make a variable and give it the value we want to look at
  var checkLetter = req.session.data['add-files2']
  if (typeof checkLetter !== 'undefined') {
    // Check whether the variable matches a condition
    if ((checkLetter.includes("Yes"))) {
      // Send user to upload file
      res.redirect('05c_upload2')
    } else {
      // Send user to who sends letter
      res.redirect('05d_wholetter2')
    }
  } else {
    res.redirect('05d_wholetter2');
  }
})

// Route around upload if upload add files = no 
router.post('/beta/_UR/20241001/v8/20choosereport', (req, res) => {
  // Make a variable and give it the value of whether we have 2 reports yet in the history
  var twoReportsYet = req.session.data['2reports']
  if ( twoReportsYet == 'yes') {
    // if 2 reports, choose report
    res.redirect('20choosereport');
    console.log ('2 reports')
  } else {
    // if 1 report1, prepare report 1
    res.redirect('03type');
    console.log ('1 report')
  }
})

}