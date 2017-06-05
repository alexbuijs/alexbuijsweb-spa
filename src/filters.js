import Vue from 'vue'

const Filters = {
  uppercase (value) {
    if (!value) return ''
    return value.toString().toUpperCase()
  },
  capitalize (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  currency (value) {
    if (value) {
      value = value.toString().replace(',', '.')
      value = parseFloat(value).toFixed(2).replace('.', ',')
      return `€&nbsp;${value}`
    }
  },
  spaces (value, interval) {
    let regex = new RegExp(`(.{${interval}})`, 'g')
    return value.replace(regex, '$1 ')
  }
}

Object.keys(Filters).forEach((filter) => {
  Vue.filter(filter, Filters[filter])
})
