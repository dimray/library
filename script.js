const myLibrary = [];
const container = document.querySelector(".container");

const addButton = document.querySelector(".btn");

const displayBooks = function (read) {
  const book = myLibrary[myLibrary.length - 1];
  const bookCard = document.createElement("card");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("h3");
  const bookPages = document.createElement("h3");
  const bookRead = document.createElement("button");
  const removeBook = document.createElement("button");
  const lineBreak1 = document.createElement("div");
  const lineBreak2 = document.createElement("div");
  lineBreak1.style.padding = "10px";
  lineBreak2.style.padding = "10px";

  removeBook.classList.add("btn");
  removeBook.textContent = "remove";
  bookRead.classList.add("btn");
  read === "read" ? bookRead.classList.add("beenRead") : bookRead.classList.add("notRead");
  bookCard.classList.add("card");
  bookTitle.textContent += book.title;
  bookAuthor.textContent += "by " + book.author;
  bookPages.textContent += book.pages + " pages";
  bookRead.textContent += book.read;
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  bookCard.appendChild(lineBreak1);
  bookCard.appendChild(removeBook);
  bookCard.appendChild(lineBreak2);

  container.appendChild(bookCard);
};

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}


Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);

}

const submitForm = document.querySelector(".submit-form");
submitForm.addEventListener("click", function () {

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  let read = document.querySelector("#read-or-not");
  read.checked ? read = "read" : read = "not read";

  let book = new Book(title.value, author.value, pages.value, read);
  book.addBookToLibrary();
  book = "";
  displayBooks(read);

  let fade = document.querySelector(".faded-element");
  fade.classList.remove("faded");
  let form = document.querySelector(".add-book-form");
  form.classList.remove("foreground");
  form.style.opacity = "0";

});

addButton.addEventListener("click", function () {
  let fade = document.querySelector(".faded-element");
  fade.classList.add("faded");
  let form = document.querySelector(".add-book-form");
  form.classList.add("foreground");
  form.style.opacity = "1";
});

container.addEventListener("click", function (e) {

  if (e.target.textContent === "not read") {
    e.target.classList.remove("notRead");
    e.target.classList.add("beenRead");
    e.target.textContent = "read";
  } else if (e.target.textContent === "read") {
    e.target.classList.remove("beenRead");
    e.target.classList.add("notRead");
    e.target.textContent = "not read";
  } else if (e.target.textContent === "remove") {
    let card = e.target.closest(".card");
    card.remove();
  }
  console.log(e);
})




// let book1 = new Book("The Hobbit", "J.R.Henry", 443, true);


// let book2 = new Book("Dragons", "A. Little", 173, false);


// let book3 = new Book("Football Stickers", "Panini", 55, true);


// let book4 = new Book("Another Book", "Author", 333, true);

// book1.addBookToLibrary();
// book2.addBookToLibrary();
// book3.addBookToLibrary();
// book4.addBookToLibrary();



















