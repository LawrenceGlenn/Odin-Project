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
	htmlBooksTable = "\
			<tr>\
				<th>Title</th>\
				<th>Author</th>\
				<th>Pages</th>\
				<th>Already Read?</th>\
			</tr>\
			";

	for (var i = 0; i < myLibrary.length; i++) {
		htmlBooksTable += "\
			<tr>\
				<th>" + myLibrary[i].title + "</th>\
				<th>" + myLibrary[i].author + "</th>\
				<th>" + myLibrary[i].pages + "</th>\
				<th>" + myLibrary[i].read + "</th>\
			</tr>\
			";
		}

	document.querySelector("#booksTable").innerHTML = htmlBooksTable
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



let submitBook = document.getElementById('newBook')

submitBook.addEventListener("click", function() {
  addBook();
});

render();