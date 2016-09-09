/*eslint-disable no-useless-escape*/
import Vue from 'vue'
import VueValidator from 'vue-validator'
Vue.use(VueValidator)

Vue.validator('email', (value) => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
})

Vue.validator('username', (value) => {
  return /(^[a-z]+)([a-z0-9]{1,})$/.test(value)
})

export default Vue
