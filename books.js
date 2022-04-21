//QuerySelector
const libraryContainer = document.querySelector('[data-library-container]');
const addBookButton = document.querySelector('[data-add-book]');
const addBookToLibraryButton = document.querySelector('[data-add-book-library');
const addBookTitle = document.querySelector('#title');
const addBookAuthor = document.querySelector('#author');
const addBookPages = document.querySelector('#pages');
const addBookRead = document.querySelector('#read');
//getElementbyId
const bookTemplate = document.getElementById('book-template');
const addBookModal = document.getElementById('modal');
const backgroundModal = document.getElementById('background-modal');
//Array
let library = [];
//Function
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = library.length;
}

function populateLibrary() {
    clearElement(libraryContainer);
    library.forEach(book => {
        const bookElement = document.importNode(bookTemplate.content, true);
        const booktitle = bookElement.querySelector('[book-title]');
        booktitle.textContent = book.title;
        const bookAuthor = bookElement.querySelector('[book-author]');
        bookAuthor.textContent = book.author;
        const bookPages = bookElement.querySelector('[book-pages]');
        bookPages.textContent = book.pages + " " + "pages";
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

function openModal() {
    addBookModal.classList.add('activate');
    backgroundModal.classList.add('activate');
}

function addBooktoLibrary() {
    let newBook = new Book(addBookTitle.value, addBookAuthor.value, addBookPages.value, addBookRead.value);
    library.push(newBook);
    populateLibrary();
    addBookModal.classList.remove('activate');
    backgroundModal.classList.remove('activate');
}

function deleteBook(event) {
    if(event.target.tagName.toLowerCase() === 'img') {
                 library.splice(event.target.id, 1);
                 populateLibrary();
        
    }
}

// function readStatus(event){
//     if(event.target.tagName.toLowerCase() === 'button') {
//         console.log(event.target.tagName)
//     }
// }
//EventListner
libraryContainer.addEventListener('click', deleteBook, false);
//libraryContainer.addEventListener('click', readStatus, false);
addBookButton.addEventListener('click', openModal);
addBookToLibraryButton.addEventListener('click', addBooktoLibrary);
//Load Page Library
const theOdyssey = new Book("Odyssey", "Homer", "384", "Read");
library.push(theOdyssey);
const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", "304", "Unread");
library.push(theHobbit);
populateLibrary();