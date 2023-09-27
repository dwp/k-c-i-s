/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

// defaults for UR 23/2/2023 make decision
  'Actions': '',
  'applymeasures1': '',
  'applymeasures2': '',
  'applymeasures3': '',
  'Actions2': '',
  'applymeasures12': '',
  'applymeasures22': '',
  'applymeasures32': '',
  'Actions3': '',
  'applymeasures13': '',
  'applymeasures23': '',
  'applymeasures33': '',
  // defaults for UR 1/3/2023 report journey
  'report-type': '',
  'on-behalf': '',
  'review-manager': '',
  'interaction': '',
  'location': '',
  'discrimination': '',
  'witnesses' : '',
  'add-files' : '',
  'incident-date-readable-month' : '',
  'checklist' : '9',
  // defaults for UR 2/3/2023 manager journey
  'policeQuestion' : '9',
  'decision_scenario' : '9',
  // v11 report type
  'report_type' : 'none',
  // display mode default to presentation mode
  'displaymode' : ["design"],
  // UR 7/7/23 defaults for action dates
  'otherdate' : ' ',
  'date-interview' : ' '

  
}
