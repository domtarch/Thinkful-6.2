function findAuthorById(authors, id)  {
  let found = authors.find((author) => author.id === id);
  return found;}

function findBookById(books, id) {let foundBooks = books.find((book) => book.id === id);
  return foundBooks;}

  function partitionBooksByBorrowedStatus(books) {
    let booksReturned = books.filter((book) =>
     book.borrows.every((borrow) => borrow.returned === true)
    );
   
    let booksBorrowed = books.filter((book) =>
     book.borrows.some((borrow) => borrow.returned === false)
    );
  
    let finalArray = [[...booksBorrowed], [...booksReturned]];
    return finalArray;
   }




// function getBorrowersForBook(book, accounts) {
//   return book.borrows
//   .map((borrow) => {
//    let account = accounts.find((account) => account.id === borrow.id);
//    return { ...borrow, ...account };
//   })
//   .slice(0, 10);
// }

function getBorrowersForBook(book, accounts) {
  //go thru list people who borrows array 
  //find matching id in accounts list 
  //if id matches add to new array 
let initalValue = []
let accumualtor = (acc, borrow, i) => {
  //acc new array
  //return acc at end of function
  let account = accounts.find((account) => account.id === borrow.id);
    acc.push({ ...borrow, ...account });
  
  return acc
}
 
let result = book.borrows.reduce(accumualtor, initalValue)   

  return result.slice(0,10);


}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
