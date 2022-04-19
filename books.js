//Query Selectors
const libraryContainer = document.querySelector('[data-library-container]');
const addBookButton = document.querySelector('[data-add-book]');

const bookTemplate = document.getElementById('book-template');

let library = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = library.length;
}

const theOdyssey = new Book("Odyssey", "Homer", "384", "Read");
library.push(theOdyssey);
const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", "304", "Unread");
library.push(theHobbit);

function populateLibrary() {
    clearElement(libraryContainer);
    library.forEach(book => {
        const bookElement = document.importNode(bookTemplate.content, true);
        const booktitle = bookElement.querySelector('[book-title]');
        booktitle.textContent = book.title;
        const bookAuthor = bookElement.querySelector('[book-author]');
        bookAuthor.textContent = book.author;
        const bookPages = bookElement.querySelector('[book-pages]');
        bookPages.textContent = book.pages;
        const bookRead = bookElement.querySelector('[book-read]');
        bookRead.textContent = book.read;
        const deleteButton = bookElement.querySelector('[delete-button]')
        if (book.id === library.findIndex(i => i.title === book.title)) {
            deleteButton.id = book.id
        } else {book.id = library.findIndex(i => i.title === book.title);
            deleteButton.id = book.id;
        }
        libraryContainer.appendChild(bookElement);
    }) 
}

function clearElement(element) {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

libraryContainer.addEventListener('click', event => {
    if(event.target.tagName.toLowerCase() === 'button') {
        library.splice(event.target.id, 1);
        populateLibrary();

    }
})

addBookButton.addEventListener('click', event => {
    console.log('click')
})

populateLibrary();