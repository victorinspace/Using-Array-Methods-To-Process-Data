function averagePrice(item) {
	return (item === "price")
}

let avgPrice = items.filter(averagePrice(items[0]))

/*
I need to find the average price of all of the items inside of the ITEMS array. 
This means I need to take each price and add them up. 
After that, I need to divide that total by the number of items there are.
I can use ".length" have JS count the total for me.

The ITEMS array has objecst within it that have the 'price' property inside of it. 
To get that I need to first go into the ITEMS array, and then to into the objects one by one.
Then I need to say, "grab the PRICE property from this object".
Then use that to add the prices together.
Then say now divide this by ITEM/OBJECT/PRICE.length
*/

console.log(avgPrice)


// Answers displayed to document

const answer1 = document.querySelector('#answer1')
answer1.innerHTML = `The average price is $${avgPrice}`
const answer2 = document.querySelector('#answer2')
answer2.innerHTML = ``
const answer3 = document.querySelector('#answer3')
answer3.innerHTML = ``
const answer4 = document.querySelector('#answer4')
answer4.innerHTML = ``
const answer5 = document.querySelector('#answer5')
answer5.innerHTML = ``
const answer6 = document.querySelector('#answer2')
answer6.innerHTML = ` were made by their sellers`