let myLibrary = [];

function Book(title, author, pages, read){
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function() {
	  info = this.title + " by " + this.author + ", " + this.pages + " pages. "
	  if(read){
	  	return info + "already read"
	  }else{
	    return info + "not read yet"
	  }
	}
}

function addBookToLibrary(){

}

function render(){

	var libraryTable = document.querySelector("#booksTable");
	while (libraryTable.firstChild) {
	    libraryTable.removeChild(libraryTable.firstChild);
	}

	for (var i = 0; i < myLibrary.length; i++) {
		let bookRow = document.createElement("tr");
		let bookTitle = document.createElement("td");
		let bookTitleText = document.createTextNode(myLibrary[i].title);
		bookTitle.appendChild(bookTitleText);
		let bookAuthor = document.createElement("td");
		let bookAuthorText = document.createTextNode(myLibrary[i].author);
		bookTitle.appendChild(bookAuthorText);
		let bookPages = document.createElement("td");
		let bookPagesText = document.createTextNode(myLibrary[i].pages);
		bookTitle.appendChild(bookPagesText);
		let bookRead = document.createElement("td");
		let bookReadText = document.createTextNode(myLibrary[i].read);
		bookTitle.appendChild(bookReadText);
		bookRow.appendChild(bookTitle);
		bookRow.appendChild(bookAuthor);
		bookRow.appendChild(bookPages);
		bookRow.appendChild(bookRead);

		let removeButton = document.createElement('input');
    	removeButton.type = 'button';
    	removeButton.value = "Remove";
    	removeButton.id = i.toString();
    	removeButton.addEventListener("click", function() {
      		removeBook(this.id);
    	});
		bookRow.appendChild(removeButton);

		libraryTable.appendChild(bookRow);
		}

}


function removeBook(index) {
  myLibrary.splice(index, 1);
  render(myLibrary);
}


function addBook(){
	let title = document.getElementById("bookTitle").value;
	let author = document.getElementById("bookAuthor").value;
	let pages = document.getElementById("bookPages").value;
	let read = false;

	if (document.getElementById("bookRead").checked){
		read = true;
	}

	myLibrary.push(new Book(title,author,pages,read));
	render();
}



let submitBook = document.getElementById('newBook');
let showForm = document.getElementById('newBookForm');
let bookForm = document.querySelector(".newBookContainer");

showForm.addEventListener("click", function() {
  bookForm.classList.toggle("visible");
  if (showForm.innerHTML == "Add book") {
    showForm.innerHTML = "Hide form";
  } else {
    showForm.innerHTML = "Add book";
  }
});


submitBook.addEventListener("click", function() {
  addBook();
});

render();