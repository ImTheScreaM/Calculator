let a = ''
let b = ''
let sign = ''
let finish = false

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9' , '0']
const action = ['+', '-', 'x', '/', '%']

const out = document.querySelector('.calc-screen p')

function clearAll() {
	a = ''
	b = ''
	sign = ''
	finish = false
	out.textContent = 0
}

document.querySelector('.clear').onclick = clearAll

document.querySelector('.buttons').onclick = event => {

	const key = event.target.textContent

	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			a += key
			out.textContent = a
			console.log(a, b, sign)
		} else if (a !== '' && (b !== '') && finish) {
			console.log('fsdf')
		} else {
			b += key
			out.textContent = b
			return
		}
	}

	if (action.includes(key)) {
		sign = key
		out.textContent = sign
		console.log(a, b, sign)
		return
	}

	if (key === '=') {
		switch (sign) {
			case '+':
				a = +a + +b
				break;
			case '-':
				a = a - b
				break;
			case 'x':
				a = a * b
				break;
			case '/':
				a = a / b
			break;
		}
		finish = true
		b = ''
		sign = ''
		out.textContent = a
	}
}
