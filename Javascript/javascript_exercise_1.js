function Book(title, author, pages, read){
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function() {
	  info = this.title + " by " + this.author + ", " + this.pages + " pages. "
	  if(this.read){
	  	return info + "already read"
	  }else{
	    return info + "not read yet"
	  }
	}
}

