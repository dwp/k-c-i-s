module.exports = function (router) {
  // Route incident or concern
  router.post('/beta/report_incident/reportv11/02behalf', (req, res) => {
    var reportType = req.session.data['report-type']
    var isConcern = false; 
    if (reportType){
      if ( reportType == "concern" ){
        isConcern = true;
      }  
    }

      // Check whether the variable matches a condition
      if (isConcern) {
        // Send user to next page
        res.redirect('./concern/00agentsource')
      } else {
        // Send user to ineligible page
        res.redirect('02behalf')
      }
  })
  
  }