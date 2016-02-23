var assert = require('assert'),
    config = require('./../lib/config');

var units = { type: "string", temp: 12 , wind:12};
var ip = '1212';

//create a variable config with the 2 variables previously declared
var Config = config(units, ip);

describe('Config', function () {

    it('has 3 props', function(){
      assert(Object.keys(Config).length == 3); //check the length of our variable
    });

    it('after construction, 2 props are populated', function(){

    });

    it('has correct key types', function(){
       assert(typeof(Config.ip) == "string");
       assert(typeof(Config.units) == "object");
    });

});
