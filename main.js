// Question 1 — Find the Average Price:
// Get the sum of the price properties inside the items array
// and divide that by the number of price indexes there are.

let avgPrice = (items.reduce(function (priceIndex1, priceIndex2) { 
	return priceIndex1 + priceIndex2.price
}, 0)) / items.length

const answer1 = document.querySelector('#answer1')
answer1.innerHTML = `The average price is $${avgPrice}`


// Question 2 — Filter and Map:
// Filter through the array for items between $14 and $18, 
// map through those items to produce their titles, then 
// join the arrays to procuce clean output.

let priceRange = items.filter(function (priceIndex) {
	return priceIndex.price > 14 && priceIndex.price < 18
}).map(function (titleIndex) {
	return titleIndex.title
}).join("\n")

const answer2 = document.querySelector('#answer2')
answer2.innerHTML = `${priceRange}`


// Question 3 — Filter and Print:
// Filter through the array to find the item with the "GBP" currency code
// and print that item's title and price to the page.

let currencyCode = items.filter(function (code) {
	return code.currency_code === "GBP"
}).map(function (titleIndex) {
	return titleIndex.title + " costs &#163;" + titleIndex.price
})

const answer3 = document.querySelector('#answer3')
answer3.innerHTML = `${currencyCode}`



// const answer4 = document.querySelector('#answer4')
// answer4.innerHTML = ``

// const answer5 = document.querySelector('#answer5')
// answer5.innerHTML = ``

// const answer6 = document.querySelector('#answer2')
// answer6.innerHTML = `${} were made by their sellers`