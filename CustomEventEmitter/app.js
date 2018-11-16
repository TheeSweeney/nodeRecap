var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('thingHappening', function(){
    console.log('Something happened somewhere...')
})

emtr.on('thingHappening', function() {
    console.log('A thing happened')
})

console.log('a thing');
emtr.emit('thingHappening')