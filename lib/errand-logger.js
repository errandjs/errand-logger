var kue = require('kue');
var queue = kue.createQueue();
var async = require('async');

function graceful() {
  process.exit(0);
}

process.on('SIGTERM', graceful);
process.on('SIGINT' , graceful);

queue.process('errand-logger', function(job, done){
  console.log(job.data.request.message);
  done();
});
