app.filter('kebab', function () {
	 return function (input) {
			if (typeof(input) === "string") {
				return input.replace(/_/g , "-");
			} else {
				return (input)
			}
		}
})

app.filter('camel', function () {
 return function (input) {
  	// get the index of the underscore
  	// run to uppercase on the char after that index
 		if (typeof(input) === "string") {
 			 	input = input.replace(/_[a-z]/g, function (g) {
 			 		return g[1].toUpperCase()
 			 	})
 			 	input = input.replace(/-[a-z]/g, function (g) {
 			 		return g[1].toUpperCase()
 			 	})
 			return input
 		} else {
 			return (input)
 		}
 	}
})

