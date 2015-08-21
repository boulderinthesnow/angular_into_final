app.filter('cents', function () { 
	 return function (input) {
	 	console.log(input)
			if (input) {
				// console.log(typeof(input));
				var splitUp = input.toString().split("");

				count = 0
				arr = []
				for (i = splitUp.length-1 ; i >= 0 ; i--) {
					// console.log(splitUp[i])
					// console.log(i,"*********I**********");
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