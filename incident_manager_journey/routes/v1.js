module.exports = function (router) {

// end-to-end journey: police yes no
router.post('/beta/incident_manager_journey/v1/route_police', (req, res) => {

  // Make a variable and give it the value from 'prnQuestion'
  var werePoliceCalled = req.session.data['policeQuestion']

  // Check whether the variable matches a condition
  if (werePoliceCalled == "no") {
    // Send user to next page
    res.redirect('/beta/incident_manager_journey/v1/09comments')
  } else {
    // Send user to ineligible page
    res.redirect('/beta/incident_manager_journey/v1/08action')
  }

})


// end-to-end journey: mike black - route to outside DWP route - add on behalf
router.post('/beta/incident_manager_journey/v1/route', (req, res) => {

  // Make a variable and give it the value from 'prnQuestion'
  var inDWP = req.session.data['full-name'].toLowerCase()

  // Check whether the variable matches a condition
  if (inDWP == "mike" || inDWP == "mike black") {
    // Send user to next page
    res.redirect('02add_witness_behalf')
  } else {
    // Send user to ineligible page
    res.redirect('03list_witness')
  }

})



// end-to-end journey: 'yes' to 'add witness'
router.post('/beta/incident_manager_journey/v1/route_witness', (req, res) => {

  // Make a variable and give it the value from 'prnQuestion'
  var addWitness = req.session.data['witnessQuestion']

  // Check whether the variable matches a condition
  if (addWitness == "no") {
    // Send user to next page
    res.redirect('/beta/incident_manager_journey/v1/07police')
  } else {
    // Send user to ineligible page
    res.redirect('/beta/incident_manager_journey/v1/02add_witness')
  }

})


}