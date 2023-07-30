class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
     get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
      }
  
    set isCheckedOut(value) { 
      this._isCheckedOut = value;
    } // Setter (This sets isCheckedOut property to a value false)
  
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    } // Method (This changes the value saved to the isCheckedOut property from false to true)
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
      return ratingsSum / this.ratings.length;
    } // Method (This returns the average value of the ratings array using reduce method)
  
    addRating(value) {
      this.ratings.push(value);
    } // Method (This accepts the argument and push it to the end of the ratings array)
  }
  
  class Book extends Media { // First child of the Media class
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media { // Second child of the Media class
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media { // Second child of the Media class
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544); // This creates a Book Instance
  historyOfEverything.toggleCheckOutStatus(); // Calls
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4); // Calls
  historyOfEverything.addRating(5); // Calls
  historyOfEverything.addRating(5); // Calls
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116); // This creates a Movie Instance
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  const dearMama = new CD('Tupac Shakur', 'DearMama', 25); // This creates a CD Instance
  dearMama.toggleCheckOutStatus();
  console.log(dearMama.isCheckedOut);
  dearMama.addRating(3);
  dearMama.addRating(4);
  dearMama.addRating(5);
  console.log(dearMama.getAverageRating());
  
  
   