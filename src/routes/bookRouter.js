const express = require('express');

const bookRouter = express.Router();

function router() {
  const books = [
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho 123456',
      genre: 'Adventure Fiction',
      read: true
    },
    {
      title: 'The Girl in the Train',
      author: 'Paula Hawkins',
      genre: 'Suspense Thriller',
      read: true
    },
    {
      title: 'Think and Grow Rich',
      author: 'Napoleon Hill',
      genre: 'Self-help',
      read: false
    },
  ];

  bookRouter.route('/').get((req, res) => {
    res.render('bookListView', {
      books
    });
  });

  bookRouter.route('/:id').get((req, res) => {
    res.render('bookView', {
      book: books[req.params.id]
    });
  });

  return bookRouter;
}

module.exports = router;
