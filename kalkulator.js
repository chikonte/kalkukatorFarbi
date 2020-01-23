	
	
function  butoonStart () {

	var radioPaintJS = document.getElementsByName ('radioButton');
	for (var i=0; i<radioPaint.length; i++) {
		radioPaintJS[i].onchange = testRadioPaint;
		function testRadioPaint () {
			var paintCoef = this.value
			console.log (paintCoef);
		}
	}


	var radioConstrJS = document.getElementsByName ('radioButtonConstr');
	for (var i=0; i<radioConstr.length; i++) {
		radioConstrJS[i].onchange = testRadioConstr;
		function testRadioConstr () {
			var constrCoef = this.value
			console.log (constrCoef);
		}
	}
}