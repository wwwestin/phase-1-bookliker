document.addEventListener("DOMContentLoaded", function() {});

const bookList = document.getElementById("list-panel");
const bookCenter = document.getElementById("show-panel");

fetch('http://localhost:3000/books')
.then(resp => resp.json())
    .then(booksArray => {
        renderBookCenter(booksArray[0])
        booksArray.forEach(renderBooksSide)
    });
    

function renderBooksSide(book) {
        newLi = document.createElement('li');
        newLi.innerHTML = book.title;
        bookList.append(newLi);

        newLi.addEventListener('click', () => {
            renderBookCenter(book) 
        })
    };

function renderBookCenter(book) {
    bookCenter.innerHTML = ' ';
    const bookPicture = document.createElement('img');
    const bookName = document.createElement('div');
    const bookDescription = document.createElement('div');

        bookPicture.src = book.img_url;
        bookPicture.append = book.img_url;
        bookCenter.append(bookPicture);

        bookName.innerHTML = book.title;
        bookCenter.append(bookName);

        bookDescription.innerHTML = book.description;
        bookCenter.append(bookDescription);
};

