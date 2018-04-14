var books = [
    {title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: false
    },
    {title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    alreadyRead: true
    },
    {title: 'De verschrikkelijke schoolmeester.',
    author: 'Dolf Verroen',
    alreadyRead: true
    }
];

let divBooks = document.getElementById('books');

for(let i = 0; i < books.length; i++) {

    let content = '';

    content = '<p>' + books[i].title + ' by ' + books[i].author + '</p>';

    if(books[i].alreadyRead){
        //al gelezen
        content += '<p>You have already read this book</p>'
    }
    else {
        //niet gelezen
        content += '<p>It\'s time to read this novel!</p>'
    }

    content += '<br>'

    divBooks.innerHTML += content;

    console.log(books[i].title + ' door ' + books[i].author);
}

let Book = function(name, writer, alreadyRead) {

    this.title = name,
    this.author = writer,
    this.alreadyRead = alreadyRead,
    this.output = function() {
        if (this.alreadyRead) {
            return "al gelezen";
        } else {
            return "nog niet gelezen";
        }
    }
}

let myFavouriteBook = new Book('Twilight', 'Stephanie Meyer', false);
let excitingNovel = new Book('The Da Vinci Code', 'Dan Brown', true);

console.log(myFavouriteBook.output());

console.log(excitingNovel);