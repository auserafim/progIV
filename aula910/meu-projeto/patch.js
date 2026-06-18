// patch.js (crie este arquivo na raiz de 'meu-projeto')
const util = require('util');
if (!util.isNullOrUndefined) {
  util.isNullOrUndefined = (value) => value === null || value === undefined;
}