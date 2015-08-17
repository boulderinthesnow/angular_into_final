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

app.filter('pigLatin', function () {
	 return function (input) {
	 	// get the index of the underscore
	 	// run to uppercase on the char after that index
			if (typeof(input) === "string") {
	 			var arr = input.split(" ")
	 			var pigArr = arr.map(function(word) {
	 				word = word + word[0] +"ay"
	 				return ( word = word.substring(1, word.length))
	 			})
				return pigArr.join(" ")
			} else {
				return (input)
			}
		}
})

app.filter('redact', function () {
	return function (input, redWord) {
		if (typeof(input) === "string") {
 			var arr = input.split(" ")
 			var wordArr = arr.map(function(word) {
 				if (word === redWord ) {
 					return ( word = "REDACTED")
 				} else {
 					return word
 				}
 			})
			return wordArr.join(" ")
		} else {
			return (input)
		}
	}
})