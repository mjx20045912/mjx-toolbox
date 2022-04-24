var crypto = require('crypto');

const encrypt = (val) => crypto.createHash('md5').update(val).digest('hex');

module.exports = { encrypt }
