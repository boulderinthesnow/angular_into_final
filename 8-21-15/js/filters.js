app.filter('cents', function () { 
	 return function (input) {
			if (input) {
				var splitUp = input.toString().split("");

				count = 0
				arr = []
				for (i = splitUp.length-1 ; i >= 0 ; i--) {
					if (i === splitUp.length-2) {
						arr.push("." + splitUp[i])
					} else {
						arr.push(splitUp[i])
					}
					if (count > 200) {throw "a goose"};
					count++	

				}
				arr = arr.reverse().join("");
				return ("$"+arr)
			} else {
				return (input)
			}
		}
})

app.filter('booleanConverter', function () {
	return function (input) {
		if (input === true) {
			return "yes"
		} else {
			return "no"
		}
	} // END FUNCTION
}) // END FILTER
