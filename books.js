

// getElementByID
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const read = document.getElementById('read');
const libraryDiv = document.getElementById('library');
const bookEntry = document.getElementById('book-entry');
const addBookButton = document.getElementById('add-book-button');
const addToLibraryButton = document.getElementById('add-to-library');
const backGroundModal = document.getElementById('background-modal');

let myLibrary = [];

const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", "297", "Unread");
const theHobbit2 = new Book("The Hobbit2", "J. R. R. Tolkien", "297", "Unread");
myLibrary.push(theHobbit);
myLibrary.push(theHobbit2);

//QuerySelector
const myLibraryBookIndex = document.querySelector('[data-book]');
const libraryContainer = document.querySelector('[data-library-container]')




//EventListeners//








addBookButton.addEventListener('click', modalTransition)
addToLibraryButton.addEventListener('click', modalClose)

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, read.value );
    myLibrary.push(newBook);
    let object = newBook;
    let bookDiv = document.createElement('div');
    bookDiv.id = 'book';
    bookDiv.className = 'book';
    bookDiv.setAttribute('data-book', myLibrary.indexOf(newBook));
    libraryDiv.appendChild(bookDiv);
    let bookInfoDiv = document.createElement('div');
    bookInfoDiv.id = 'book-info';
    bookInfoDiv.className = 'book-info';
    bookDiv.appendChild(bookInfoDiv);
    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.id = 'delete-button';
    bookDiv.appendChild(deleteButton);
    let deleteSvg = document.createElement('img');
    deleteSvg.src = 'svg/delete.svg';
    deleteButton.appendChild(deleteSvg);
    for (const prop in object) {
        const div = document.createElement('div');
        div.className = 'book-details';
        div.id = prop;
        bookInfoDiv.appendChild(div);
        div.textContent = object[prop];
    }

    
    let deleteButtons = document.querySelectorAll('button.delete-button')
    deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            let book = button.parentElement;
            book.removeChild(book.firstElementChild);
            book.removeChild(book.firstElementChild);
            book.remove();
        });
    })
}

function removeBookFromLibrary() {
   console.log(button.id);
}


function library() {
    let i = 0;
    while (i < myLibrary.length) {
            let bookDiv = document.createElement('div');
            bookDiv.id = 'book';
            bookDiv.className = 'book';
            libraryDiv.appendChild(bookDiv);
            let bookInfoDiv = document.createElement('div');
            bookInfoDiv.id = 'book-info';
            bookInfoDiv.className = 'book-info';
            bookDiv.appendChild(bookInfoDiv);
            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.id = 'delete-button';
            bookDiv.appendChild(deleteButton);
            let deleteSvg = document.createElement('img');
            deleteSvg.src = 'svg/delete.svg';
            deleteButton.appendChild(deleteSvg);
            let object = myLibrary[i];
            for (const prop in object) {
                const div = document.createElement('div');
                div.id = object[prop];
                div.className = 'book-details';
                bookInfoDiv.appendChild(div);
                div.textContent = object[prop];
            }
    
        i++;
    }
}

function modalTransition() {
    backGroundModal.classList.add('activate');
    bookEntry.classList.add('activate');
}

function modalClose() {
    addBookToLibrary();
    backGroundModal.classList.remove('activate');
    bookEntry.classList.remove('activate');
}

library();
