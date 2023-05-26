function isValidTitle(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30;
}

function isValidContent(value) {
  return value && value.trim().length > 0 && value.trim().length <= 3000;
}

function isValidDate(value) {
  return value && new Date(value).getTime() < new Date().getTime();
}

export function validateNoteInput(input) {
  let validationErrors = {};

  if (!isValidTitle(input.title)) {
    validationErrors.title = 'Invalid note title. Must be at most 30 characters long.'
  }

  if (!isValidContent(input.content)) {
    validationErrors.content = 'Invalid note content. Must be at most 3000 characters long.'
  }

  if (!isValidDate(input.date)) {
    validationErrors.date = 'Invalid date. Must be a date before today.'
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}

function isValidEmail(value) {
  return value && value.includes('@');
}

function isValidPassword(value) {
  return value && value.trim().length >= 7;
}

export function validateCredentials(input) {
  let validationErrors = {};

  if (!isValidEmail(input.email)) {
    validationErrors.email = 'Invalid email address.'
  }

  if (!isValidPassword(input.password)) {
    validationErrors.password = 'Invalid password. Must be at least 7 characters long.'
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}