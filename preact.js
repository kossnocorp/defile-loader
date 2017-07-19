const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const optionsJSON = JSON.stringify(loaderUtils.parseQuery(this.query))
  return `
${source}
var defile = require('defile/preact')
module.exports = defile(module.exports, ${optionsJSON})
`
}
