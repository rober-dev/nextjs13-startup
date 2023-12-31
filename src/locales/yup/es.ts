export default {
  mixed: {
    default: 'No es correcto',
    required: 'Obligatorio',
    oneOf: 'Debe ser uno de los siguientes valores: ${values}',
    notOneOf: 'No debe ser ninguno de los siguientes valores: ${values}',
    noType: 'El de dato no es válido',
  },
  string: {
    length: 'Debe tener una longitud de ${length} caracteres',
    min: 'Longitud mínima: ${min} caracteres',
    max: 'Longitud máxima: ${max} caracteres',
    matches: 'Formato incorrecto',
    email: 'No es un email correcto',
    url: 'No es una URL válida',
    trim: 'No debe contener espacios ni al final ni al principio',
    lowercase: 'Debe ser en minúscula',
    uppercase: 'Debe ser en mayúscula',
  },
  number: {
    min: 'Debe ser mayor o igual que ${min}',
    max: 'Debe ser menor o igual que ${max}',
    lessThan: 'Debe ser menor que ${less}',
    moreThan: 'Debe ser mayor que ${more}',
    notEqual: 'No debe ser igual que ${notEqual}',
    positive: 'Debe ser un número positivo',
    negative: 'Debe ser un número negativo',
    integer: 'Debe ser un entero',
  },
  date: {
    min: 'Debe ser posterior a ${min}',
    max: 'Debe ser anterior a ${max}',
  },
  object: {
    noUnknown: 'No puede tener valores no especificados en su clase',
  },
  array: {
    min: 'Debe tener al menos ${min} elementos',
    max: 'Debe tener un número de elementos menor o igual a ${max}',
  },
  boolean: {},
} as const;
