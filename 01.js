// The problem with callbacks
navigator.geolocation.getCurrentPosition(position => {
  console.log(position);
});
console.log('done');

navigator.geolocation.getCurrentPosition(position => {
  console.log(position);
  console.log('done');
});

// setTimeout()
// addEventListener()