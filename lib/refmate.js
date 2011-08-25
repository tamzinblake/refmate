var readFunction = require('./refs')

function getTaggedRefs (tag) {
  var refs = readFunction()
    , out = []

  for (var i = 0; i < refs.length; i++) {
    if (refs[i].tags[tag]) {
      out.push(refs[i])
    }
  }
  return out
}

function getPropRefs (prop, re) {
  var refs = readFunction()
    , out = []

  for (var i = 0; i < refs.length; i++) {
    if (refs[i][prop].match(re)) {
      out.push(refs[i])
    }
  }
  return out
}

module.exports = { read: readFunction
                 , tag: getTaggedRefs
                 , search: getPropRefs
                 }
