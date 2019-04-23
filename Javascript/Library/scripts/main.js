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

	let entries = document.getElementsByClassName('bookRow');
	for (let i = entries.length - 1; i >= 0; i--) {
    	libraryTable.removeChild(entries[i]);
	}

	for (var i = 0; i < myLibrary.length; i++) {
		let bookRow = document.createElement("tr");
		bookRow.classList.add('bookRow');
		let bookTitle = document.createElement("td");
		bookTitle.innerHTML = myLibrary[i].title;
		bookRow.appendChild(bookTitle);
		let bookAuthor = document.createElement("td");
		bookAuthor.innerHTML = myLibrary[i].author;
		bookRow.appendChild(bookAuthor);
		let bookPages = document.createElement("td");
		bookPages.innerHTML = myLibrary[i].pages;
		bookRow.appendChild(bookPages);
		let bookRead = document.createElement("td");
		bookRead.innerHTML = myLibrary[i].read;
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

		let readButton = document.createElement('input');
    	readButton.type = 'button';
    	readButton.value = "Read?";
    	readButton.id = i.toString();
    	readButton.addEventListener("click", function() {
      		if (myLibrary[this.id].read){
      			myLibrary[this.id].read=false;
      		}else{
      			myLibrary[this.id].read=true;
      		}
      		render();
    	});
		bookRow.appendChild(readButton);

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