const encode = (val) => Buffer.from(val).toString('base64');
const decode = (val) => Buffer.from(val, 'base64').toString('ascii');

module.exports = { encode, decode}
