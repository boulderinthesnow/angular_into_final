	 foo = function (input, redWord) {
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


console.log(foo("this is string", "is"))