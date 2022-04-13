// getElementByID

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const read = document.getElementById('read');
const libraryDiv = document.getElementById('library')

let myLibrary = [];

const theHobbit = new Book("meow", "meow", "meow", "meow");
const theHobbo = new Book("new", "new", "new", "new");
myLibrary.push(theHobbit);
myLibrary.push(theHobbo);

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, read.value);
    myLibrary.push(newBook);
}

function library() {
    let i = 0;
    while (i < myLibrary.length) {
        let bookDiv = document.createElement('div')
        bookDiv.id = 'book'
        bookDiv.className = 'book'
        libraryDiv.appendChild(bookDiv);
        let bookInfoDiv = document.createElement('div');
        bookInfoDiv.className = 'book-info';
        bookInfoDiv.id = 'book-info';
        bookDiv.appendChild(bookInfoDiv);
        let object = myLibrary[i]
        for (const prop in object) {
            const div = document.createElement('div');
            div.id = 'book-details';
            div.className = 'book-details';
            bookInfoDiv.appendChild(div);
            div.textContent = object[prop];
        }
        i++;
    }
}