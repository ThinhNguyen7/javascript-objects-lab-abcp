var recipes = {}
<<<<<<< HEAD

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign (object, {[key]: value})
}

function deleteFromObjectByKey(object, key){
  var newobject = {}
  delete object.key
  return newobject
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
=======
>>>>>>> b86a99cb2f2054115882818cd6b381f22115b3fc
