// getElementByID
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const read = document.getElementById('read');

let myLibrary = [];

const theHobbit = new Book("meow", "meow", "meow", "meow");

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return (title + author + pages + read)
    }
    console.log(this.info());
}

function addBookToLibrary() {
    myLibrary.push(Book(bookTitle.value, bookAuthor.value, bookPages.value, read.value))
}

