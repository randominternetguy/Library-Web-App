let myLibrary = [];

// all DOM element variables
const mainElement = document.querySelector('#main');
const form = document.querySelector('form');
const body = document.querySelector('body');

// all button variables
const addBookButton = document.querySelector('#add-book-button');
const closeFormButton = document.querySelector('#close-form-button');

// make a Book constructor.
function Book(title, author, pages){
	this.title = title;
	this.author = author;
	this.pages = pages;
}

function addBookToLibraryn(book){
	myLibrary.push(book);
}

function render(library){
	for (let book = 0; book <= library.length; book++){
		let bookElement = document.createElement('div');
		bookElement.textContent = library[book];
		bookElement.classList.add('book');
		mainElement.appendChild(bookElement);
	}
}

// show the form field when user clicks the add button
addBookButton.addEventListener('click', () => {
	form.style.display = 'flex';
	body.style.cssText = 'background-color: #c7c7c7';
});

closeFormButton.addEventListener('click', () => {
	form.style.display = 'none';
	body.style.cssText = 'background-color: #c3efbf';
});