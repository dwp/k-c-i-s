module.exports = function (router) {

// Route note files to skip uploads
router.post('/beta/_UR/20240129/3-history/h07a_11a_upload', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var addFiles = req.session.data['2401_note_add_files']
    // Check whether the variable matches a condition
    if (addFiles == "no") {
      // Send user to 
      res.redirect('h_07infoconfirm')
    } else {
      // Send user to 
      res.redirect('h07a_11a_upload')
    }
})

// Route no measures = no review date 
router.post('/beta/_UR/20240129/2-dm/08reviewdate', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var measures = req.session.data['2401_applymeasures1'] + req.session.data['2401_applymeasures2'] + req.session.data['2401_applymeasures3'];
  // Check whether the variable matches a condition
  if (measures == "") {
    // Send user to 
    res.redirect('09prepare_single_man')
  } else {
    // Send user to 
    res.redirect('08reviewdate')
  }
  console.log ("hello");
})


}