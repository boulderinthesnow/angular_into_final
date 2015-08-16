 foo = function (input) {
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


console.log(foo("happy happy joy joy"))