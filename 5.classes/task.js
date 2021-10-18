// ЗАДАЧА № 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
    return this.state;
  }

  set state(num) {
    this._state = num;
    if (num < 0) this.state = 0;
    if (num > 100) this.state = 100;
  }

  get state() {
    return this._state;
  }
} 

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super (state);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = 'magazine';
}
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super (state);
    this.author = author;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super (state);
    this.author = author;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super (state);
    this.author = author;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super (state);
    this.author = author;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.type = 'detective';
  }
}

// ЗАДАЧА № 2
class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) this.books.push(book);
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) return this.books[i];
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const foundBook = this.books[i];
        this.books.splice(i, 1);
        return foundBook;
      }   
    }
    return null;
  }
}

// ЗАДАЧА № 3
class Student {
  constructor(name) {
    this.name = name;
  }
  
  addMark (mark, subject) {
    const _mark = Number(mark);
    
    if (!this[subject]) {
      this[subject] = [];
    }
    if (1 > _mark || _mark > 6 || Number.isNaN(_mark)) {
      console.log('Ошибка, оценка должна быть числом от 1 до 5');
      } 
    this[subject].push(Number(mark));
  }
   
  getAverageBySubject (subject) {
    if (!this[subject]) {
      return 0; 
    }
    let sum = 0;
    for (let i = 0; i < this[subject].length; i++) {
      sum += this[subject][i];
    }
    return sum / this[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this);
      if (subjects.length === 1) {
        return 0;
      }
  
    let sum = 0;
      
    for (let i = 1; i < subjects.length; i++) {
      let subject = subjects[i];
      let subjectMarks = this[subject];
      let sumSubject = 0;
      
      for (let j = 0; j < subjectMarks.length; j++) {
        sumSubject += subjectMarks[j];
      }
      
      sum += sumSubject / subjectMarks.length;
    }
      return sum / (subjects.length - 1);
  }

  exclude (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}