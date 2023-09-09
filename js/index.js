const day = document.querySelector('span[data-testid="currentDayOfTheWeek"]');
const time = document.querySelector('span[data-testid="currentUTCTime"]');

const dayArray = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thrusday',
	'Friday',
	'Saturday',
];

const d = new Date();
console.log(d);
const dayValue = dayArray[d.getDay()];

day.textContent += dayValue;

const UTCTime = Date.now();

time.textContent += UTCTime;
