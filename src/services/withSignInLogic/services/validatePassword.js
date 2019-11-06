const validatePassword = password => {
  let isValid = false
  if (password.length > 5) {
    isValid = true
  }
  return isValid
}

export default validatePassword
