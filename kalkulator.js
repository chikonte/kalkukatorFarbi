	for (var i=0; i<radioPaint.length; i++) {
		radioPaint[i].onchange = testRadioPaint;

		function testRadioPaint () {
			var paintCoef = this.value
			console.log (paintCoef);}
		}

	var radioConstr = document.getElementsByName ('radioButtonConstr');

	for (var i=0; i<radioConstr.length; i++) {
		radioConstr[i].onchange = testRadioConstr;
		function testRadioConstr () {
			var constrCoef = this.value
			console.log (constrCoef);}
		
	}
asdad