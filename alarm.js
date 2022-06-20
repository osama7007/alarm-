//setInterval(time,1000);
// collect selections
let hourSelect = document.querySelector(".hours");
let minSelect = document.querySelector(".minutes");
let secSelect = document.querySelector(".seconds");
let icon = document.querySelector("[name=alarm-outline]");
// hold selections
let selecHour = document.querySelectorAll(".hours");
let selectMin = document.querySelectorAll(".minutes");
let selectSec = document.querySelectorAll(".seconds");
// hold options
let optionHour = document.querySelector("[value=Hours]");
let optionMin = document.querySelector("[value=Minutes]");
let optionSec = document.querySelector("[value=Seconds]");

// hold span displaying time
let tempTime = document.getElementById("date-data");
// hold setting alaarm
let setAlarm = document.querySelector(".set-alarm");
// append options to selections hours and minutes and seconds
let addHours = () => {
	// to add 12 options which means 12 hour
	for (let i = 0; i <= 11; i++) {
		let hoursElement = document.createElement("option");
		let hoursValues = document.createTextNode(i);
		hoursElement.appendChild(hoursValues);
		hourSelect.appendChild(hoursElement);
	}
};
addHours();
// append options to selections hours and minutes and seconds
let addMiun = () => {
	for (let i = 0; i <= 59; i++) {
		let minElement = document.createElement("option");
		let minValues = document.createTextNode(i);
		minElement.appendChild(minValues);
		minSelect.appendChild(minElement);
	}
};
addMiun();
// append options to selections hours and minutes and seconds
let addSec = () => {
	for (let i = 0; i <= 59; i++) {
		let secElement = document.createElement("option");
		let secValues = document.createTextNode(i);
		secElement.appendChild(secValues);
		secSelect.appendChild(secElement);
	}
};
addSec();
//  get hours
setInterval(
	(getHours = () => {
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();
		let sec = new Date().getSeconds();
		if (hours > 12) {
			hours -= 12;
		}
		tempTime.innerHTML = `${hours}:${minutes}:${sec}`;
	}),
	1000
);
/////////// initializing Alarm ////////////////
function storeHours() {
	let setHour = this.value;
	optionHour.innerHTML = setHour;
}
function storeMin() {
	let setMin = this.value; //(this word) refer to option
	optionMin.innerHTML = setMin;
}
function storeSec() {
	let setSec = this.value;
	optionSec.innerHTML = setSec;
}
selecHour.forEach((option) => {
	// to add hours to first option if it is changed
	option.addEventListener("change", storeHours);
});
selectMin.forEach((option) => {
	option.addEventListener("change", storeMin);
});
selectSec.forEach((option) => {
	option.addEventListener("change", storeSec);
});
let finalAlarm = 0;
setAlarm.addEventListener("click", function (e) {
	if (isNaN(optionHour.innerText) || isNaN(optionMin.innerText)) {
		// to check if time is number or not
		alert("insert valid time");
	} else {
		icon.style.cssText = "color:red ; animation: scale 2s infinite";
		let n = true;
		setInterval(() => {
			if (
				new Date().getMinutes() == optionMin.innerText &&
				new Date().getHours() - 12 == optionHour.innerText // to convert 24 hours to 12
			) {
				if (n) {
					// to display confirm one time only
					let x = confirm("wake up , time to do some great things");
					if (x) {
						n = false;
						icon.style.cssText = "color:#000 ; animation: none";
					}
				}
			}
		}, 1000);
	}
});
