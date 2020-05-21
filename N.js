// this is navbar (show/hide)

const hamBurger = document.querySelector(".hamBurger");

const nav = document.querySelector("nav");


hamBurger.addEventListener("click", function() {

	"use strict";

	nav.classList.toggle("open");

	hamBurger.classList.toggle("close");

});

// this is time

var seconds = 19,

respect = 0,

countDiv = document.getElementById("time"),

btn = document.getElementById("btn"),

t_x = document.getElementById("t_x"),

x_x = document.getElementById("x_x"),

y_y = document.getElementById("y_y"),

z_z = document.getElementById("z_z"),

colorRed = document.getElementById("btn"),

secondPass;

function countDown() {

	"use strict";

	setInterval(function() {

		secondPass();

	}, 1000)}

// هذه الدالة التي تشغل دالة الوقت التي قبلها

function secondPass() {

	"use strict";

	var minutes = Math.floor(seconds / 60),

	remSeconds = seconds % 60;

	if (seconds < 10) {

		remSeconds = "0" + remSeconds;

		countDiv.style.transition = "0.2s";

		countDiv.style.border = "solid 2px red";

		countDiv.style.boxShadow = "0 0 20px red,inset 0 0 20px red";

		countDiv.style.color = "red";

	}

	countDiv.innerHTML = remSeconds;

	if (seconds > 0) {

		seconds = seconds -1;

	} else {

		clearInterval(countDiv);

		countDiv.innerHTML = "Time Out";

		enabled();

	}}

// هذه الدالة تستخدم عند نهاية الوقت

function enabled() {

	"use strict";

	t_x.setAttribute("disabled", "disabled");

	t_x.setAttribute("style", "transition:0.4s;box-shadow: 0 0 15px black;background-color:#0cff21;");

	x_x.setAttribute("disabled", "disabled");

	x_x.setAttribute("style", "transition:0.4s;box-shadow: 0 0 15px black;background-color:red;");

	y_y.setAttribute("disabled", "disabled");

	y_y.setAttribute("style", "transition:0.4s;box-shadow: 0 0 15px black;background-color:red;");

	z_z.setAttribute("disabled", "disabled");

	z_z.setAttribute("style", "transition:0.4s;box-shadow: 0 0 15px black;background-color:red;");

	btn.removeAttribute("disabled");

	btn.setAttribute("style", "transition:0.4s;box-shadow: 0 0 15px black;background-color:#01037c;");

}

// هذه الدالة لتعطيل ازرار الاجابات والغاء التعطيل عن زر السؤال الاخير

function disabled() {

	"use strict";

	t_x.setAttribute("disabled", "disabled");

	x_x.setAttribute("disabled", "disabled");

	y_y.setAttribute("disabled", "disabled");

	z_z.setAttribute("disabled", "disabled");

	btn.style.transition = "0.4s";

	btn.style.backgroundColor = "#1712d9";

}

// عند اختيار الاجابة الصحيحة

t_x.onclick = function() {

	"use strict";

	respect = respect + 1;

	disabled();

	t_x.style.transition = "0.4s";

	t_x.style.backgroundColor = "#0cff21";

	t_x.style.boxShadow = "0 0 20px black";

};

// عند اختيار الاجابة الخطأ

x_x.onclick = function() {

	"use strict";

	disabled();

	x_x.style.transition = "0.4s";

	x_x.style.backgroundColor = "red";

	x_x.style.boxShadow = "0 0 20px black";

};
y_y.onclick = function() {

	"use strict";

	disabled();

	y_y.style.transition = "0.4s";

	y_y.style.backgroundColor = "red";

	y_y.style.boxShadow = "0 0 20px black";

};
z_z.onclick = function() {

	"use strict";

	disabled();

	z_z.style.transition = "0.4s";

	z_z.style.backgroundColor = "red";

	z_z.style.boxShadow = "0 0 20px black";

};

// عند الضغط على زر السؤال التالي

var Qu1 = document.getElementById("Qu1"),

Qu2 = document.getElementById("Qu2");

btn.addEventListener("click", function() {

	"use strict";
	// دالة تشغيل المؤقت
	countDown();
	// اخفاء لوحة السؤال الاول
	Qu1.setAttribute("style", "display:none;");
	// اظهار لوحة السؤال التالي
	Qu2.style.display = "block";
	// لاعادة تفعيل ازرار الخيارات
	t_x.removeAttribute("disabled");
	x_x.removeAttribute("disabled");
	y_y.removeAttribute("disabled");
	z_z.removeAttribute("disabled");
	// لتعطيل زر السؤال التالي
	btn.setAttribute("disabled", "disabled");
	// لحذف التصميم من زر السؤال التالي ليظهر بوضع عدم التفعيل
	btn.removeAttribute("style");
});