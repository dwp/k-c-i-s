module.exports = function (router) {

// Route Incident Manager Journey - Add witness 
router.post('/beta/incident_manager_journey/v4/route_police', (req, res) => {
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
router.post('/beta/incident_manager_journey/v4/route_colleague', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var onBehalf = req.session.data['contact']
    // Check whether the variable matches a condition
    if (onBehalf == "noaccess") {
      // Send user to 
      res.redirect('05confirm_witness_onbehalf')
    } else if (onBehalf == "access") {
      // Send user to 
      res.redirect('06sent-1colleague')
    } else if (onBehalf == "me") {
      // Send user to 
      res.redirect('06sent-4you')
    }
})

// Route Incident Manager Journey - witness on behalf of 
router.post('/beta/incident_manager_journey/v4/route_witness2', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var onBehalf = req.session.data['contact']
    // Check whether the variable matches a condition
    if (onBehalf == "you") {
      // Send user to 
      res.redirect('06sent-3youonbehalf')
    } else if (onBehalf == "colleague") {
      // Send user to 
      res.redirect('06sent-2colleagueonbehalf')
    } 
})

// Route Incident Manager Journey - witness on behalf of 
router.post('/beta/incident_manager_journey/v4/04add_witness', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var addWitness = req.session.data['addwitness']
    // Check whether the variable matches a condition
    if (addWitness == "no") {
      // Send user to 
      res.redirect('09police')
    } else if (addWitness == "yes-onbehalf") {
      // Send user to 
      res.redirect('wit01add_witness')
    } else {
      // Send user to 
      res.redirect('04add_witness')
    } 
})

// Route Incident Manager Journey - witness type
router.post('/beta/incident_manager_journey/v4/wit01add_witness', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var witnessType = req.session.data['witness-type']
  console.log(witnessType);
    // Check whether the variable matches a condition
    if (witnessType == "request") {
      // Send user to 
      res.redirect('04add_witness')
    } else {
      // Send user to 
      res.redirect('wit01add_witness')
    } 
})




}