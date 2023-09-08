"use strict";

module.exports = {
  routes: [
    { // Path defined with a regular expression
      method: 'GET',
      path: '/alumnos/loginalumno', // Only match when the URL parameter is composed of lowercase letters
      handler: 'loginalumno.exampleAction',
    },
    {
      method: "POST",
      path: '/alumnos/loginunalumno/:identifier/:password',
      handler: "loginalumno.loginAction",
    }
  ]
}