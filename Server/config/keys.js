//key.js logic what set of keys should i use

if (process.env.NODE_ENV === 'production') {
    //inside the production return production set keys
    module.exports = require('./prod');
}

else {

    //inside local return local set of keys
    module.exports = require('./dev');

}