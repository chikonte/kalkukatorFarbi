	
	let constrCoef = 0;
	function testRadioConstr () {
		constrCoef = parseFloat(this.value)
		console.log (constrCoef);
		}
	const radioConstrJS = document.getElementsByName ('radioButtonConstr');
	for (let i=0; i<radioConstrJS.length; i++) {
		radioConstrJS[i].onchange = testRadioConstr;
	}	

	let paintCoef = 0;
	
	function testRadioPaint () {
		paintCoef = parseFloat(this.value)
		console.log (paintCoef);
		}
		const radioPaintJS = document.getElementsByName ('radioButton');
		for (let i=0; i<radioPaintJS.length; i++) {
			radioPaintJS[i].onchange = testRadioPaint;
		}	

const odM = 1;
const odSm = 100;
const odMm = 10000;
		
function  butoonStart () {

	let od = document.getElementById("box1").value;
		
	let odVumiru;	
	switch (od) {
		case "м.кв":
			odVumiru = parseInt(odM);
		break;

		case "см.кв":
			odVumiru = parseInt(odSm);
		break;

		case "мм.кв":
			odVumiru = parseInt(odMm);
		break;		
	}
	/* 999- TPH
	888 - oil
	777 - primer
	*/ 

	let dataUsers = parseFloat(document.getElementById("inputInUser").value);
	let primerCoef = 0.093;
	let noData = "Не використ.";
	let the_fractional_part = 3;
	if (paintCoef<1) {
		document.getElementById("paintFinal").innerHTML =  (dataUsers * odVumiru * paintCoef * constrCoef).toFixed(the_fractional_part);
		document.getElementById("primerFinal").innerHTML = (primerCoef * dataUsers * odVumiru * constrCoef).toFixed(the_fractional_part);
		document.getElementById("solventFinal").innerHTML = ( (dataUsers * odVumiru * paintCoef * constrCoef) + (primerCoef * dataUsers * odVumiru * constrCoef) * 0.2 ).toFixed(the_fractional_part);
		document.getElementById("nefrasFinal").innerHTML = ((dataUsers * odVumiru * constrCoef) / 100  ).toFixed(the_fractional_part);
		document.getElementById("oilFinal").innerHTML = (noData);
	}

	else if (paintCoef == 999) {
		document.getElementById("paintFinal").innerHTML =  (dataUsers * odVumiru * 0.12).toFixed(the_fractional_part);
		document.getElementById("primerFinal").innerHTML = noData;
		document.getElementById("solventFinal").innerHTML = noData;
		document.getElementById("nefrasFinal").innerHTML = noData;
		document.getElementById("oilFinal").innerHTML = noData;
	}

	else if (paintCoef == 888){
		document.getElementById("paintFinal").innerHTML =  noData;
		document.getElementById("primerFinal").innerHTML = noData;
		document.getElementById("solventFinal").innerHTML = noData;
		document.getElementById("nefrasFinal").innerHTML = noData;
		document.getElementById("oilFinal").innerHTML = (dataUsers * odVumiru * 0.03).toFixed(the_fractional_part);
	}

	else if (paintCoef == 777){
		document.getElementById("paintFinal").innerHTML =  noData;
		document.getElementById("primerFinal").innerHTML = (primerCoef * dataUsers * odVumiru * constrCoef).toFixed(the_fractional_part);
		document.getElementById("solventFinal").innerHTML = ((primerCoef * dataUsers * odVumiru * constrCoef) * 0.2 ).toFixed(the_fractional_part);
		document.getElementById("nefrasFinal").innerHTML = ((dataUsers * odVumiru * constrCoef) / 100  ).toFixed(the_fractional_part);
		document.getElementById("oilFinal").innerHTML = (noData);
	}
	
}
	