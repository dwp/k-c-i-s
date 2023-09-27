module.exports = function (router) {

// Journey 1 - Route incident or concern
router.post('/beta/_UR/20230406/v11/1/01report', (req, res) => {
  var reportType = req.session.data['decision_scenario']
  var isIncident = false; 
  if (reportType){
    if (reportType == "1"){
      isIncident = true;
    }  
  }
    // Check whether the variable matches a condition
    if (isIncident) {
      // Send user to next page
      res.redirect('incident')
    } else {
      // Send user to ineligible page
      res.redirect('02')
    }
})

// Journey 1 - Route incident or concern
router.post('/beta/_UR/20230406/v11/1/02', (req, res) => {
  var reportType = req.session.data['decision_scenario2']
  var isIncident = false; 
  if (reportType){
    if (reportType == "1"){
      isIncident = true;
    }  
  }
    // Check whether the variable matches a condition
    if (isIncident) {
      // Send user to next page
      res.redirect('incident')
    } else {
      // Send user to ineligible page
      res.redirect('concern')
    }
})

// Journey 2 - Route incident or concern
router.post('/beta/_UR/20230406/v11/2/02', (req, res) => {
  var reportType = req.session.data['decision_scenario3']
  var isIncident = false; 
  if (reportType){
    if (reportType == "1"){
      isIncident = true;
    }  
  }
    // Check whether the variable matches a condition
    if (isIncident) {
      // Send user to next page
      res.redirect('incident')
    } else {
      // Send user to ineligible page
      res.redirect('concern')
    }
})

// Journey 3 - Route incident or concern
router.post('/beta/_UR/20230406/v11/3/01report', (req, res) => {
  var reportType = req.session.data['decision_scenario4']
  var isIncident = false; 
  if (reportType){
    if (reportType == "1"){
      isIncident = true;
    }  
  }
    // Check whether the variable matches a condition
    if (isIncident) {
      // Send user to next page
      res.redirect('incident')
    } else {
      // Send user to ineligible page
      res.redirect('02')
    }
})

// Journey 3 - Route incident or concern
router.post('/beta/_UR/20230406/v11/3/02', (req, res) => {
  var reportType = req.session.data['decision_scenario5']
  var isIncident = false; 
  if (reportType){
    if (reportType == "1"){
      isIncident = true;
    }  
  }
    // Check whether the variable matches a condition
    if (isIncident) {
      // Send user to next page
      res.redirect('03')
    } else {
      // Send user to ineligible page
      res.redirect('concern')
    }
})
// Journey 3 - Route incident or concern
router.post('/beta/_UR/20230406/v11/3/03', (req, res) => {
  var reportType = req.session.data['decision_scenario6']
  var isIncident = false; 
  if (reportType){
    if (reportType == "1"){
      isIncident = true;
    }  
  }
    // Check whether the variable matches a condition
    if (isIncident) {
      // Send user to next page
      res.redirect('incident')
    } else {
      // Send user to ineligible page
      res.redirect('concern')
    }
})
}