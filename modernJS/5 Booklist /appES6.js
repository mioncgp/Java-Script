class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    addBookToList(book) {
    // grab tbody for displaying the data
    const list = document.getElementById('book-list');
    // create new element tr tag to accomodate new values
    const row = document.createElement('tr');
    // append new data to tr
    row.innerHTML = `<td>${book.title}</td>
                     <td>${book.author}</td>
                     <td>${book.isbn}</td>
                     <td><a href="#" class="delete">X<a></td>
                     `;
    list.appendChild(row);
    }

    deleteBook(book) {
        // remove element
        book.parentElement.parentElement.remove();
        // display the remova
    }

    clearFields() {
        title.value = '';
        author.value = '';
        isbn.value = '';
    }

    showAlert(message, className) {
        // div that's going to show the alert
        const div =  document.createElement('div');
        // add classes to manipulate div 
        div.className = `alert ${className}`;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent 
        const container = document.querySelector('.container');
        // get form
        const form = document.querySelector('#book-form');
        // insert alert
        container.insertBefore(div, form);
        // Timeout after 3 sec
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}


class LS {

    static getBooks() {
        let books;
        if(sessionStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(sessionStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        const books = LS.getBooks();

        books.forEach(function(book) {
            const ui = new UI;
            ui.addBookToList(book)
        })
    }

    static addBook(book) {
        let books = LS.getBooks();
        books.push(book);
        sessionStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = LS.getBooks();

        books.forEach(function(book, index) {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        sessionStorage.setItem('books', JSON.stringify(books));
    }
}

// Dom loaded
document.addEventListener("DOMContentLoaded", LS.displayBooks);

// Event listener to add element
document.getElementById('book-form').addEventListener('submit', function(e) {
    // grab values from inputs
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
    // Instansiate a class of book
    const book = new Book(title, author, isbn);
    //Instansiate a class of ui
    const ui = new UI();
if(title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error');
} else {
    // add book to ui/list
    ui.addBookToList(book);
    // to LS
    LS.addBook(book);
    // show that addded 
    ui.showAlert('Book Added!', 'success');
    // clear fields
    ui.clearFields();
    console.log(ui)
    e.preventDefault()
}
})

// Event listener to remove element
document.getElementById('book-list').addEventListener('click', function(e) {
    // Initiate the ui 
    const ui = new UI();
    // delete item func
    ui.deleteBook(e.target);
    // remove from LS
    LS.removeBook(e.target.parentElement.previousElementSibling.textContent);
    // show message
    ui.showAlert("Book Removed!", 'success');

    e.preventDefault();
})

