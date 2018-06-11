console.log('hi');

for(var start = 1; start < 10; start++) {
  setTimeout(function () {
    console.log('hello');
  }, 3000* start);
}