
var BUI = require('./util')

BUI.mix(BUI, {
  UA: require('./ua'),
  JSON: require('./json'),
  Date: require('./date'),
  Array: require('./array'),
  KeyCode: require('./keycode'),
  Observable: require('./observable'),
  Base: require('./base'),
  Component: require('./component')
})

module.exports = BUI
