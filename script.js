let myLibrary = [];

function Book(title, author, pages){
	this.title = title;
	this.author = author;
	this.pages = pages;
}


// form control event listeners.
const body = document.querySelector('body');
const form = document.querySelector('#form');

const addBookButton = document.querySelector('#add-book-button');
addBookButton.addEventListener('click', () => {
	showForm();
});

const closeFormButton = document.querySelector('#close-form-button');
closeFormButton.addEventListener('click', ()  => {
	hideForm();	
});

function submitForm(){
	let author = document.querySelector('#author-input').value;
	let title= document.querySelector('#title-input').value;
	let pages = document.querySelector('#pages-input').value;
	myLibrary.push(new Book(title, author, pages));
	
	event.preventDefault();	
	
	hideForm();
	render();	
}

function showForm(){
	form.style.display = 'flex';
	body.style.cssText = 'background-color: #ccc';
}

function hideForm(){
	form.style.display = 'none';
	body.style.cssText = 'background-color: #c3efbf';
}

const mainBooksLibraryElement = document.querySelector('#main-books');
function render(){
	for (let i = 0; i < myLibrary.length; i++){
		const book = myLibrary[i];
		let bookElement = document.createElement('div');
		bookElement.classList.add('book');
		bookElement.innerHTML = 
		`
		<p>${book.title}</p>
		<p>${book.author}</p>
		<p>${book.pages}</p>
		`
		mainBooksLibraryElement.appendChild(bookElement);
	}
}
