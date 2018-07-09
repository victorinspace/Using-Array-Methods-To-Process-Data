// Q1:
const avgPrice = (items.reduce((priceIndex1, priceIndex2) => priceIndex1 + priceIndex2.price, 0) / items.length).toFixed(2)
const answer1 = document.querySelector('#answer1')
answer1.innerHTML = `The average price is $${avgPrice}`


// Q2:
const rangedPrice = items.filter(item => item.price > 14 && item.price < 18)
													.map(item => item.title)
													.join('\n')
const answer2 = document.querySelector('#answer2')
answer2.innerHTML = `${rangedPrice}`


// Q3:
const gptItem = items.filter(item => item.currency_code === 'GBP')
											.map(item => item.title + " costs &pound;" + item.price)
const answer3 = document.querySelector('#answer3')
answer3.innerHTML = `${gptItem}`


// Q4:
const madeOfWood = items.filter(item => item.materials.includes('wood'))
			.map(item => item.title)
			.join("\n\n")
const answer4 = document.querySelector('#answer4')
answer4.innerHTML = `${madeOfWood}`


// Q5:
const eightOrMore = items.filter(item => item.materials.length >= 8)
let eightHtml = ''
eightOrMore.forEach(function(item) {
	eightHtml += `${item.title} has ${item.materials.length} materials\n` 
	eightHtml += item.materials.join('\n')
	eightHtml += '\n\n'
})
const answer5 = document.querySelector('#answer5')
answer5.innerHTML = `${eightHtml}`


// Q6:
const madeBySeller = items.filter(item => item.who_made == 'i_did').length
const answer6 = document.querySelector('#answer6')
answer6.innerHTML = `${madeBySeller} were made by their sellers.`

