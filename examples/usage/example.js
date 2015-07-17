// no configuration

var breaker = new CircuitBreaker();

var command = function(success, failed) {
  restCall()
    .done(success)
    .fail(failed);
};

var fallback = function() {
  alert("Service is down");
};

breaker.run(command, fallback);



// with configuration
var config 	= require("config.json");
var breaker = new CircuitBreaker(config);

var command = function(success, failed) {
  restCall()
    .done(success)
    .fail(failed);
};

var fallback = function() {
  alert("Service is down");
};

breaker.run(command, fallback);