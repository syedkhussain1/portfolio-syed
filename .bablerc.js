const env = require('./env-cofig.js')

module.export = {
   presets: ['nect/bable'],
   plugins: [['transform-define', env]] 
}