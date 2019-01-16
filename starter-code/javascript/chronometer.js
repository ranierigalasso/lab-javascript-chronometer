// Constructor
 function Chronometer() {
   this.currentTime = 0;
   this.intervalId = 0;
   this.minutes = 0;
   this.seconds = 0;
 }

 //use  .bind as .this in the setInterval (async function callback) refers to the .this
 //called by the seetInterval and not the object Chronometer
 Chronometer.prototype.startClick = function () {
   this.intervalId = setInterval(function () {
    this.currentTime += 1;
    this.setTime();
   }.bind(this),1000);
 };

 Chronometer.prototype.setMinutes = function () {
   return Math.floor(this.currentTime/60);
 };
 
 Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
 };

 Chronometer.prototype.twoDigitsNumber = function (value) {
  if (value === 0) {
    return "00";
  } else if (value > 0 && value < 10) {
    return "0" + value.toString()
  } else {
    return value.toString();
  }
 };

 Chronometer.prototype.setTime = function () {
   this.currentTime = this.twoDigitsNumber(this.minutes);
   this.currentTime = this.twoDigitsNumber(this.seconds);
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

 Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
};

// Chronometer.prototype.splitClick = function () {

// };
