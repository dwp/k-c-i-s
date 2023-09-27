//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
require("./views/beta/report_incident/routes/v9")(router);
require("./views/beta/report_incident/routes/v10")(router);
require("./views/beta/report_incident/routes/v11")(router);
require("./views/beta/report_incident/routes/v12")(router);
require("./views/beta/_UR/20230406/routes/v11")(router);
require("./views/beta/incident_manager_journey/routes/v4")(router);
require("./views/beta/incident_manager_journey/routes/v2")(router);
require("./views/beta/incident_manager_journey/routes/v1")(router);



// --------



// Run this code when a form is submitted to 'test' asking for ref number only if the police were called
router.post('/beta/incident_manager/test', (req, res) => {

  // Make a variable and give it the value from 'prnQuestion'
  var werePoliceCalled = req.session.data['policeQuestion']

  // Check whether the variable matches a condition
  if (werePoliceCalled == "no") {
    // Send user to next page
    res.redirect('/beta/incident_manager/04add_soars')
  } else {
    // Send user to ineligible page
    res.redirect('/beta/incident_manager/02action')
  }

})

// Run this code when a form is submitted to 'test2' asking if reported in SOARS
router.post('/beta/incident_manager/test2', (req, res) => {

  // Make a variable and give it the value from 'prnQuestion'
  var werePoliceCalled = req.session.data['soarsQuestion']

  // Check whether the variable matches a condition
  if (werePoliceCalled == "no") {
    // Send user to next page
    res.redirect('end')
  } else {
    // Send user to ineligible page
    res.redirect('/beta/incident_manager/05fast')
  }

})

// Run this code when a form is submitted to 'route' in witnesses to simulate on behalf of journey
router.post('/beta/incident_manager/add_witness/route', (req, res) => {

  // Make a variable and give it the value from 'prnQuestion'
  var isItTim = req.session.data['full-name'].toLowerCase()

  // Check whether the variable matches a condition
  if (isItTim == "mike" || isItTim == "mike black") {
    // Send user to next page
    res.redirect('00add_witness_behalf')
  } else {
    // Send user to ineligible page
    res.redirect('01list_witness')
  }

})
// VIDEO --------
// Run this code when a form is submitted to '09recorddata' in report journey just go to next screen, but the post submission means the data is stored
router.post('/beta/_UR/20220714/video/09recorddata', (req, res) => {

  // Make a variable from each answer field
  var whyField = req.session.data['why']
  var howField = req.session.data['how']
  var whatField = req.session.data['what']
  var nextField = req.session.data['next']
  var witnessesField = req.session.data['witnesses']
  var endField = req.session.data['end']
  var feelField = req.session.data['feel']

  // set field values for error page from submitted values 
  // if (whyField == "") {
  //   req.session.data['why'] = "BLANK" + witnessesField
  // }

  if (howField == "") {
    // req.session.data['how'] = "BLANK"
    req.session.data['howb'] = "I asked him what he had done in his job search"
  } else {
    req.session.data['howb'] = howField
  }
  if (whatField == "") {
    // req.session.data['what'] = "BLANK"
    req.session.data['whatb'] = "he said - youre no use you stupid cow!"
  } else {
    req.session.data['whatb'] = whatField
  }
  if (nextField == "") {
    // req.session.data['next'] = "BLANK"
    req.session.data['nextb'] = "Please dont call me names, I'm trying to help you"
  } else {
    req.session.data['nextb'] = nextField
  }
  if (witnessesField = "yes") {
    req.session.data['witnessesYes'] = true
    req.session.data['witnessesYesb'] = true
  } else if (witnessesField = "no") {
    req.session.data['witnessesNo'] = true
    req.session.data['witnessesNob'] = true
  } else {
    req.session.data['witnessesYesb'] = true
    req.session.data['witnessesNob'] = false
    // req.session.data['witnesses'] = "BLANK"
  }

  if (endField == "") {
    // req.session.data['end'] = "BLANK"
    req.session.data['endb'] = "He walked out"
  } else {
    req.session.data['endb'] = endField
  }
  if (feelField == "") {
    // req.session.data['feel'] = "BLANK"
    req.session.data['feelb'] = "I was upset"
  } else {
    req.session.data['feelb'] = feelField
  }

  res.redirect('09describe_error')
  //res.redirect('display_description')

})

router.post('/beta/_UR/20220714/video/09recorddata2', (req, res) => {

  res.redirect('display_description')
})

// ONBEHALF /////////////////////////////////////////
router.post('/beta/_UR/20220714/onbehalf/02recorddata', (req, res) => {

  res.redirect('02behalf_error2')
})

router.post('/beta/_UR/20220714/onbehalf/02recorddata2', (req, res) => {

  res.redirect('display_description')
})


// JOURNAL /////////////////////////////////////////
// Run this code when a form is submitted to '09recorddata' in report journey just go to next screen, but the post submission means the data is stored
router.post('/beta/_UR/20220714/journal/09recorddata', (req, res) => {

  // Make a variable and give it the value from 'prnQuestion'
  var whyField = req.session.data['why2']
  var howField = req.session.data['how2']
  var whatField = req.session.data['what2']
  var nextField = req.session.data['next2']
  var witnessesField = req.session.data['witnesses2']
  var endField = req.session.data['end2']
  var feelField = req.session.data['feel2']

  if (whyField == "") {
    // req.session.data['how'] = "BLANK"
    req.session.data['why2b'] = "I dont know"
  } else {
    req.session.data['why2b'] = whyField
  }
  if (howField == "") {
    // req.session.data['how'] = "BLANK"
    req.session.data['how2b'] = "I dont know"
  } else {
    req.session.data['how2b'] = howField
  }
  if (whatField == "") {
    // req.session.data['what'] = "BLANK"
    req.session.data['what2b'] = "he threatened me"
  } else {
    req.session.data['what2b'] = whatField
  }
  if (nextField == "") {
    // req.session.data['next'] = "BLANK"
    req.session.data['next2b'] = "nothing yet"
  } else {
    req.session.data['next2b'] = nextField
  }
  if (witnessesField = "yes") {
    req.session.data['witnessesYes2'] = true
    req.session.data['witnessesYes2b'] = true
  } else if (witnessesField = "no") {
    req.session.data['witnessesNo2'] = true
    req.session.data['witnessesNo2b'] = true
  } else {
    req.session.data['witnessesYes2b'] = true
    req.session.data['witnessesNo2b'] = false
    // req.session.data['witnesses'] = "BLANK"
  }

  if (endField == "") {
    // req.session.data['end'] = "BLANK"
    req.session.data['end2b'] = "No follow up"
  } else {
    req.session.data['end2b'] = endField
  }
  if (feelField == "") {
    // req.session.data['feel'] = "BLANK"
    req.session.data['feel2b'] = "I was scared"
  } else {
    req.session.data['feel2b'] = feelField
  }

  res.redirect('09describe_error')
})

// Run this code when a form is submitted to '09recorddata' in report journey just go to next screen, but the post submission means the data is stored
router.post('/beta/_UR/20220714/journal/09recorddata2', (req, res) => {

  res.redirect('display_description')
})



// Route incident or concern
router.post('/beta/report_incident/reportv10/route_incident', (req, res) => {
  res.redirect('/')
  // Make a variable and give it the value from 'prnQuestion'
  var reportType = req.session.data['report-type']
    // Check whether the variable matches a condition
    if (reportType == "incident") {
      // Send user to next page
      res.redirect('02behalf')
    } else if (reportType == "concern") {
      // Send user to next page
      res.redirect('concern/00agentsource')
    } else {
      // Send user to ineligible page
      res.redirect('01report_error')
    }

})



// Route Incident Manager Journey - Add witness 
router.post('/beta/incident_manager_journey/v3/route_police', (req, res) => {
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
router.post('/beta/incident_manager_journey/v3/route_colleague', (req, res) => {
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

// Route Incident Manager Journey - witness contact
router.post('/beta/witness/witnessv3a/route_wit', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var didyouwitness = req.session.data['didyouwitness']
    // Check whether the variable matches a condition
    if (didyouwitness == "yes") {
      // Send user to 
      res.redirect('03comments')
    } else {
      // Send user to 
      res.redirect('04check3')
    }
})


// Route Incident Manager Journey - witness on behalf of 
router.post('/beta/incident_manager_journey/v3/route_witness2', (req, res) => {
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

// UR rig Route Incident Manager Journey - Add witness 
router.post('/beta/_UR/20220908/landing/route_police', (req, res) => {
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
// UR rig Route Incident Manager Journey - witness contact
router.post('/beta/_UR/20220908/landing/route_colleague', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var onBehalf = req.session.data['contact']
    // Check whether the variable matches a condition
    if (onBehalf == "noaccess") {
      // Send user to 
      res.redirect('05confirm_witness2')
    } else if (onBehalf == "access") {
      // Send user to 
      res.redirect('04add_witnesserror3')
    } else if (onBehalf == "me") {
      // Send user to 
      res.redirect('05confirm_witness')
    }
})
// UR rig Route Incident Manager Journey - comments
router.post('/beta/_UR/20220908/landing/12check', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var onBehalf = req.session.data['contact']
      // Send user to 
      res.redirect('12check')

})

// UR rig Route Incident Manager Journey - witness on behalf of 
router.post('/beta/_UR/20220908/landing/route_witness2', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var onBehalf = req.session.data['contact']
    // Check whether the variable matches a condition
    if (onBehalf == "you") {
      // Send user to 
      res.redirect('06sent1')
    } else if (onBehalf == "colleague") {
      // Send user to 
      res.redirect('06sent2')
    } 
})

// 20221006 UR rig Route witness Journey 
router.post('/beta/_UR/20221006/route_witur', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var didYouWitness = req.session.data['didyouwitness']
  // Send user to 

  if (didYouWitness == "yes") {
    // Send user to 
    res.redirect('03comments')
  } else {
    // Send user to 
    res.redirect('04check2')
  } 
})
router.post('/beta/_UR/20221006/route_witur2', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  // var onBehalf = req.session.data['04check']
  // Send user to 
  res.redirect('04check')
})

// Make decision - if banning order then contingencies 
router.post('/beta/decision/v1/route_cont', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var onActions = req.session.data['actions']
    // Check whether the variable matches a condition
    if (onActions && onActions.includes("requesttosolicitorforbanningorder")) {
      // Send user to 
      res.redirect('04contingencies')
    } else {
      // Send user to 
      res.redirect('05actionaccount_good')
    } 
})

// copy the const name and the file path to new version

// ######################### UR 2023/02/23 ###################################################
/// get month name
function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString('en-US', { month: 'long' });
}
// ######################### Scenario 1 ###################################################

// UR reroute - accounting for measure is mandatory 
router.post('/beta/_UR/20230223/1/06reviewdate', function (req, res) {
  // Make a variable and give it the value from 'prnQuestion'
  var account = req.session.data['measureaccounts'];
  var measures = req.session.data['applymeasures1'] + req.session.data['applymeasures2'] + req.session.data['applymeasures3'] ;
    // Check whether the variable matches a condition
    if (account) {
      if ((measures == '')) {
        res.redirect('07check');
      } else {
        res.redirect('06reviewdate');
      }
    } else {
      // Send user to 
      res.redirect('05measureaccount_error');
    } 
})

// UR reroute - review date for measure is mandatory 
router.post('/beta/_UR/20230223/1/07check', function (req, res) {
  // get date and measures
  var date = req.session.data['reviewdate'];
  var day = req.session.data['incident-date-day'];
  var month = req.session.data['incident-date-month'];
  //convert months to readable and store in context
  req.session.data['readable-month'] = getMonthName(month);
  var year = req.session.data['incident-date-year'];
  var measures = req.session.data['applymeasures1'] + req.session.data['applymeasures2'] + req.session.data['applymeasures3'];
    // not supplied date
    if (!date) {
      if ((measures == '')) {
        // no measures so fine
        res.redirect('07check');
      } else {
        // not supplied date and there are measures
        res.redirect('06reviewdate_error');
      }
    } else {
      // supplied date is other but there are blanks
      if ((date == 'other') && ((!day) || (!month) || (!year))) {
        res.redirect('06reviewdate_error');
      } else {
        res.redirect('07check');
      }
    } 
})
// ######################### Scenario 2 ###################################################

// UR reroute - accounting for measure is mandatory 
router.post('/beta/_UR/20230223/2/06reviewdate', function (req, res) {
  // Make a variable and give it the value from 'prnQuestion'
  var account = req.session.data['measureaccounts2'];
  var measures = req.session.data['applymeasures12'] + req.session.data['applymeasures22'] + req.session.data['applymeasures32'] ;
    // Check whether the variable matches a condition
    if (account) {
      if ((measures == '')) {
        res.redirect('07check');
      } else {
        res.redirect('06reviewdate');
      }
    } else {
      // Send user to 
      res.redirect('05measureaccount_error');
    } 
})

// UR reroute - review date for measure is mandatory 
router.post('/beta/_UR/20230223/2/07check', function (req, res) {
  // get date and measures
  var date = req.session.data['reviewdate2'];
  var day = req.session.data['incident-date2-day'];
  var month = req.session.data['incident-date2-month'];
  //convert months to readable and store in context
  req.session.data['readable-month2'] = getMonthName(month);
  var year = req.session.data['incident-date2-year'];
  var measures = req.session.data['applymeasures12'] + req.session.data['applymeasures22'] + req.session.data['applymeasures32'];
    // not supplied date
    if (!date) {
      if ((measures == '')) {
        // no measures so fine
        res.redirect('07check');
      } else {
        // not supplied date and there are measures
        res.redirect('06reviewdate_error');
      }
    } else {
      // supplied date is other but there are blanks
      if ((date == 'other') && ((!day) || (!month) || (!year))) {
        res.redirect('06reviewdate_error');
      } else {
        res.redirect('07check');
      }
    } 
})
// ######################### Scenario 3 ###################################################

// UR reroute - accounting for measure is mandatory 
router.post('/beta/_UR/20230223/3/06reviewdate', function (req, res) {
  // Make a variable and give it the value from 'prnQuestion'
  var account = req.session.data['measureaccounts3'];
  var measures = req.session.data['applymeasures13'] + req.session.data['applymeasures23'] + req.session.data['applymeasures33'] ;
    // Check whether the variable matches a condition
    if (account) {
      if ((measures == '')) {
        res.redirect('07check');
      } else {
        res.redirect('06reviewdate');
      }
    } else {
      // Send user to 
      res.redirect('05measureaccount_error');
    } 
})

// UR reroute - review date for measure is mandatory 
router.post('/beta/_UR/20230223/3/07check', function (req, res) {
  // get date and measures
  var date = req.session.data['reviewdate3'];
  var day = req.session.data['incident-date3-day'];
  var month = req.session.data['incident-date3-month'];
  //convert months to readable and store in context
  req.session.data['readable-month3'] = getMonthName(month);
  var year = req.session.data['incident-date3-year'];
  var measures = req.session.data['applymeasures13'] + req.session.data['applymeasures23'] + req.session.data['applymeasures33'];
    // not supplied date
    if (!date) {
      if ((measures == '')) {
        // no measures so fine
        res.redirect('07check');
      } else {
        // not supplied date and there are measures
        res.redirect('06reviewdate_error');
      }
    } else {
      // supplied date is other but there are blanks
      if ((date == 'other') && ((!day) || (!month) || (!year))) {
        res.redirect('06reviewdate_error');
      } else {
        res.redirect('07check');
      }
    } 
})
// ######################### UR 20230301 Report Incident ###################################################

// Route incident or concern
router.post('/beta/_ur/20230301/reportv10/02behalf', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var reportType = req.session.data['report-type']
  // Check whether the variable matches a condition
  if (reportType == "incident") {
    // Send user to next page
    res.redirect('02behalf')
  } else if (reportType == "concern") {
    // Send user to next page
    res.redirect('concern/00agentsource')
  } else {
    // Send user to ineligible page
    res.redirect('01report_error')
  }
})
// validate description page
router.post('/beta/_ur/20230301/reportv10/10add', (req, res) => {
  var passValidation = false;
  var checkList = req.session.data['checklist'];
  if (typeof checkList !== 'undefined'){
   passValidation = checkList.includes("1") && checkList.includes("2") && checkList.includes("3") && checkList.includes("4") && checkList.includes("5") ;
  }
  if (passValidation) {
    // Send user to next page
    res.redirect('10add')
  } else {
    // Send user to ineligible page
    res.redirect('09comments_error')
  }
})

// convert to readable month
router.post('/beta/_ur/20230301/reportv10/07where', (req, res) => {
  // get month 
  var month = req.session.data['incident-date-month'];
  //convert months to readable and store in context
  req.session.data['incident-date-readable-month'] = getMonthName(month);
  res.redirect('07where')
})
// convert to comment with paras
router.post('/beta/_ur/20230301/v3/12check', (req, res) => {
  // get month 
  var comment = req.session.data['manager-comments'];
  //convert months to readable and store in context
  req.session.data['manager-comments-para'] = comment.replace(/(?:\r\n|\r|\n)/g, '<br><br>');
  console.log(comment);
  res.redirect('12check')
})

// ######################### UR 20230302 Manager ###################################################

// Route to correct scenario
router.post('/beta/_ur/20230302/v3/01landingpage2_manager', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var scenario = '01landingpage2_manager' + req.session.data['manager_scenario']
  // Send user to next page
  res.redirect(scenario)

})

// ######################### UR 20230303 Decision ###################################################

// Route to correct scenario
router.post('/beta/_ur/20230303/3/01landingpage1_nmready', (req, res) => {
  // Make a variable and give it the value from 'prnQuestion'
  var scenario2 = '01landingpage1_nmready' + req.session.data['decision_scenario']
  // Send user to next page
  res.redirect(scenario2)

})

// UR reroute - accounting for measure is mandatory 
router.post('/beta/_UR/20230303/3/06reviewdate', function (req, res) {
  // Make a variable and give it the value from 'prnQuestion'
  var account = req.session.data['measureaccounts3'];
  var measures = req.session.data['applymeasures13'] + req.session.data['applymeasures23'] + req.session.data['applymeasures33'] ;
    // Check whether the variable matches a condition
    if (account) {
      // make HTML line breaks
      req.session.data['measureaccounts3'] = account.replace(/\r?\n/g, '<br>');
      if ((measures == '')) {
        res.redirect('07check');
      } else {
        res.redirect('06reviewdate');
      }
    } else {
      // Send user to 
      res.redirect('05measureaccount_error');
    } 
})

// UR reroute - review date for measure is mandatory 
router.post('/beta/_UR/20230303/3/07check', function (req, res) {
  // get date and measures
  var date = req.session.data['reviewdate3'];
  var day = req.session.data['incident-date3-day'];
  var month = req.session.data['incident-date3-month'];
  //convert months to readable and store in context
  req.session.data['readable-month3'] = getMonthName(month);
  var year = req.session.data['incident-date3-year'];
  var measures = req.session.data['applymeasures13'] + req.session.data['applymeasures23'] + req.session.data['applymeasures33'];

    // not supplied date
    if (!date) {
      if ((measures == '')) {
        // no measures so fine
        res.redirect('07check');
      } else {
        // not supplied date and there are measures
        res.redirect('06reviewdate_error');
      }
    } else {
      // supplied date is other but there are blanks
      if ((date == 'other') && ((!day) || (!month) || (!year))) {
        res.redirect('06reviewdate_error');
      } else {
        res.redirect('07check');
      }
    } 
})


//copy the router use and update the sprint version

