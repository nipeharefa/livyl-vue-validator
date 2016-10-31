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

// Allow minimal 8 character with at least 1 letter and 1 number
Vue.validator('password', (val) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(val)
})

Vue.validator('name', (val) => {
  return /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(val)
})

export default Vue
