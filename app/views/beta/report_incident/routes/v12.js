module.exports = function (router) {

    // GET route: Render the page with no errors on initial load
    router.get('/beta/report_incident/reportv12/c00agentsource_has', function (req, res) {
      res.render('beta/report_incident/reportv12/c00agentsource_has', {
        errors: [],
        description: '',
        checklist: []
      });
    });

  // GET route: Render the page with no errors on initial load
  router.get('/beta/report_incident/reportv12/c01comments_has', function (req, res) {
    var test=""
    res.render('beta/report_incident/reportv12/c01comments_has', {
      errors: [],
      description: '',
      checklist: []
    });
  });

  // POST route: Validate the form submission
  router.post('/beta/report_incident/reportv12/c01comments_has', function (req, res) {
    const description = req.body.description;
    let checklist = req.body.checklist;

    // Normalise checkbox values to always be an array
    if (checklist && !Array.isArray(checklist)) {
      checklist = [checklist];
    }

    const errors = [];

    if (!description || description.trim() === '') {
      errors.push({
        text: 'Enter a description of the safety concern',
        href: '#description'
      });
    }

    if (!checklist || checklist.length === 0) {
      errors.push({
        text: 'Confirm you have reviewed all the required information',
        href: '#checklist'
      });
    }

    if (errors.length > 0) {
      res.render('beta/report_incident/reportv12/c01comments_has', {
        errors,
        description,
        checklist: checklist || []
      });
    } else {
      res.redirect('/beta/report_incident/reportv12/c02fileuploadcheck_has');
    }
  });

  router.post('/beta/report_incident/reportv12/c00agentsource_has_answer', function (req, res) {
    res.redirect('/beta/report_incident/reportv12/c01comments_has');
  });
};