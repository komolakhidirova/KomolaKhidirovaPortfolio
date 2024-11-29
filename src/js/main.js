// Header
let header = document.createElement('header')
header.classList.add('header')

// Container
let container = document.createElement('div')
container.classList.add('container-body')
container.classList.add('header__container')

// Button
let burger = document.createElement('button')
burger.classList.add('header__burger')
let span = document.createElement('span')
let span2 = document.createElement('span')
let span3 = document.createElement('span')
burger.append(span, span2, span3)

burger.addEventListener('click', function () {
	header.classList.toggle('open')
})

// Logo
let logo = document.createElement('div')
logo.textContent = 'KOMOLA KHIDIROVA'
logo.classList.add('logo')

// Arrays
let menuArray = ['About me', 'Portfolio', 'Education', 'Contacts']
let menuHrefArray = ['#about', '#portfolio', '#education', '#contacts']

// Menu
let nav = document.createElement('nav')
nav.classList.add('menu')

function getMenu(itemsArray, hrefArray) {
	let menuList = document.createElement('ul')
	menuList.classList.add('menu__list')

	for (let i = 0; i < itemsArray.length; i++) {
		let item = document.createElement('li')
		item.classList.add('menu__item')

		let link = document.createElement('a')
		link.classList.add('menu__link')
		link.textContent = itemsArray[i]
		link.href = hrefArray[i]

		item.append(link)
		menuList.append(item)
	}

	return menuList
}

// Body
let menu = getMenu(menuArray, menuHrefArray)
nav.append(menu)
container.append(burger, logo, nav)
header.append(container)

document.body.append(header)
