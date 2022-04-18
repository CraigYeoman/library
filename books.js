//Query Selectors
const libraryContainer = document.querySelector('[data-library-container]');

let library = [];

function populateLibrary() {
    clearElement(libraryContainer);
    library.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        const bookInfoElement = document.createElement('div');
        bookInfoElement.classtList.add('book-info');
        bookInfoElement.appendChild(bookElement);
        

    }) 
}

function clearElement(element) {

}

populateLibrary();