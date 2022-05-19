function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
  return foundId;
 }

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
 );
 return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
    if (account.id === books[i].borrows[j].id) {
      total += 1;

    }
  }
}
return total 
}


  
    function getBooksPossessedByAccount(account, books, authors) {
      let booksTaken = [];
      books.forEach(book=>{
        if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
          booksTaken.push(book);
        }
      })
      
      booksTaken.forEach(book=>{
        let anAuthor = authors.find(person => person.id === book.authorId);
        book['author'] = anAuthor;
      })
  
      return booksTaken;
    }              
   

  



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
