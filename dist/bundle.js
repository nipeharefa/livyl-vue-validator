'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));
var VueValidator = _interopDefault(require('vue-validator'));

/*eslint-disable no-useless-escape*/
Vue.use(VueValidator);

Vue.validator('email', value => {
  return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
  );
});

Vue.validator('username', value => {
  return (/(^[a-z]+)([a-z0-9]{1,})$/.test(value)
  );
});

module.exports = Vue;