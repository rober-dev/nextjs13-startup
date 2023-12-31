export default {
  mixed: {
    default: 'Invalid',
    required: 'Required',
    oneOf: 'Must be one of the following values: ${values}',
    notOneOf: 'Must not be one of the following values: ${values}',
    noType: 'Type of field ${path} invalid',
  },
  string: {
    length: 'Must be exactly ${length} characters',
    min: 'Must be at least ${min} characters',
    max: 'Must be at most ${max} characters',
    matches: "Must match the following: '${regex}'",
    email: 'Must be a valid email',
    url: 'Must be a valid URL',
    trim: 'Must be a trimmed string',
    lowercase: 'Must be a lowercase string',
    uppercase: 'Must be a upper case strin',
  },
  number: {
    min: 'Must be greater than or equal to ${min}',
    max: 'Must be less than or equal to ${max}',
    lessThan: 'Must be less than ${less}',
    moreThan: 'Must be greater than ${more}',
    notEqual: 'Must be not equal to ${notEqual}',
    positive: 'Must be a positive number',
    negative: 'Must be a negative number',
    integer: 'Must be an integer',
  },
  date: {
    min: 'Must be later than ${min}',
    max: 'Must be at earlier than ${max}',
  },
  object: {
    noUnknown: 'Cannot have keys not specified in the object shape',
  },
  array: {
    min: 'Must have at least ${min} items',
    max: 'Must have less than or equal to ${max} item',
  },
  boolean: {},
} as const;
