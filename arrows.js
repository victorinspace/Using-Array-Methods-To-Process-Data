use arrow functions to replace anonymous functions


OLD
items.filter(funciton(item) {
	return item.price < 15
})

NEW
items.filter(item => item.price < 15)







RULES:
1: if there is only one paramater, don't use parentheses

2: 0 or more than 1 params, use parentheses

3: if there is no curly braces (where a code block usually is), it will automatically return that value
	-- if you do use curly braces, you must use the return keyword

use fat arrow to tell JS that this is a functions



