module.exports = function (router) {

// Route note files to skip uploads
router.post('/beta/_UR/20240422/reportv12/09describe', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var addFiles = req.session.data['202404_interaction']
    // Check whether the variable matches a condition
    if (!(addFiles == "In person")) {
      // Send user to 
      res.redirect('09describe_written')
    } 
})



}