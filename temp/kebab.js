 foo = function (input) {
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


console.log(foo("foo_bar-happy"))