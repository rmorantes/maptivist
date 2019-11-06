const validateAlias = alias => {
  let isValid = false
  if (alias.length > 5) {
    isValid = true
  }
  return isValid
}

export default validateAlias
