const btn = document.querySelector(`.btn`);
const input = document.getElementById(`mail`);
const form = document.querySelector(`.email`);
const icons = document.querySelector(`.icons`);
const errorDesktop = document.querySelector(`.error`);

btn.addEventListener(`click`, (e) => {
	e.preventDefault();
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (mailformat.test(input.value)) {
		console.log(`good boy`);
		form.submit();
		form.reset();
	} else {
		console.log(`bad boy`);
		errorDesktop.style.display = `flex`;
		icons.style.margin = `3.4rem 0 0 0`;
		clearError();
	}
});

function clearError() {
	setInterval(() => {
		icons.style.margin = `5.6rem 0 0 0`;
		errorDesktop.style.display = `none`;
	}, 3000);
}
// mobile
const formMobile = document.querySelector(`.mobile-form`);
const btn2 = document.querySelector(`.btn2`);
const inputMobile = document.querySelector(`#mail2`);
const errorMobile = document.querySelector(`.error1`);

btn2.addEventListener(`click`, (e) => {
	e.preventDefault();
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (mailformat.test(inputMobile.value)) {
		formMobile.submit();
		formMobile.reset();
	} else {
		errorMobile.style.display = `flex`;
		clearErrorMobile();
	}
});
function clearErrorMobile() {
	setInterval(() => {
		errorMobile.style.display = `none`;
	}, 3000);
}
