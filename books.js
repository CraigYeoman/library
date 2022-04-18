//Query Selectors
const libraryContainer = document.querySelector('[data-library-container]');

let library = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const theHobbit = new Book("meow", "meow", "meow", "meow");
const theHobbo = new Book("new", "new", "new", "new");
library.push(theHobbit);
library.push(theHobbo);

function populateLibrary() {
    //clearElement(libraryContainer);
    library.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        libraryContainer.appendChild(bookElement);
        const bookInfoElement = document.createElement('div');
        bookInfoElement.classList.add('book-info');
        bookElement.appendChild(bookInfoElement);
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        bookElement.appendChild(deleteButton);
        let deleteSvg = document.createElement('img');
        deleteSvg.src = 'svg/delete.svg';
        deleteButton.appendChild(deleteSvg);
        // let i = 0;
        const bookDetails = document.createElement('div');
        bookDetails.classList.add('book-details');
        bookDetails.textContent = book.title;
        bookDetails.textContent = book.author;
        bookInfoElement.appendChild(bookDetails);
        //console.log(book.title)
        
        // while (i < library.length) {
        //     let object = library[i];
        //     for (const prop in object) {
        //         const bookDetails = document.createElement('div');
        //         bookDetails.classList.add('book-details');
        //         bookDetails.textContent = object[prop];
        //         bookInfoElement.appendChild(bookDetails);
                
        //     }
        //     i++;
        // }
    }) 
}

//function clearElement(element) {
    //while(element.firstChild){
    //    element.removeChild(element.firstChild);
   // }
//}

populateLibrary();