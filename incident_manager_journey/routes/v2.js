module.exports = function (router) {

// Route Incident Manager Journey - Add witness 
router.post('/beta/incident_manager_journey/v2/route_police', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var policeCalled = req.session.data['policeQuestion']
    // Check whether the variable matches a condition
    if (policeCalled == "no") {
      // Send user to 
      res.redirect('11comments')
    } else {
      // Send user to 
      res.redirect('10action')
    }
})
// Route Incident Manager Journey - witness contact
router.post('/beta/incident_manager_journey/v2/route_colleague', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var onBehalf = req.session.data['contact']
    // Check whether the variable matches a condition
    if (onBehalf == "noaccess") {
      // Send user to 
      res.redirect('05confirm_witness2')
    } else if (onBehalf == "access") {
      // Send user to 
      res.redirect('06sent1')
    } else if (onBehalf == "me") {
      // Send user to 
      res.redirect('06sent4')
    }
})

// Route Incident Manager Journey - witness on behalf of 
router.post('/beta/incident_manager_journey/v2/route_witness2', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var onBehalf = req.session.data['contact']
    // Check whether the variable matches a condition
    if (onBehalf == "you") {
      // Send user to 
      res.redirect('06sent3')
    } else if (onBehalf == "colleague") {
      // Send user to 
      res.redirect('06sent2')
    } 
})

}