const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports =  async(text) => {
    const hash = await bcrypt.hash(text, saltRounds);
    return hash;
}