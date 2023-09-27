module.exports = function (router) {
// Route incident or concern
router.post('/beta/report_incident/reportv10/route_incident', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var reportType = req.session.data['report-type']
    // Check whether the variable matches a condition
    if (reportType == "incident") {
      // Send user to next page
      res.redirect('02behalf')
    } else if (reportType == "concern") {
      // Send user to next page
      res.redirect('concern10/00agentsource')
    } else {
      // Send user to ineligible page
      res.redirect('01report_error')
    }
})
  
  }