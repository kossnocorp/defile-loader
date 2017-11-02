const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const optionsJSON = JSON.stringify(loaderUtils.getOptions(this) || {})
  return `
${source}
var defile = require('defile/preact')
module.exports = defile(module.exports, ${optionsJSON})
`
}
