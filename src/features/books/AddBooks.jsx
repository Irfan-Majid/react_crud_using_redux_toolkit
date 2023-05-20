import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';

const AddBooks = () => {
 const [title,setTitle] = useState('')
 const [author,setAuthor] = useState('')
 const { id } = useSelector((state) => {
  const sortedBooks = state.booksReducer.books.slice().sort((a, b) => b.id - a.id);
  const firstBook = sortedBooks[0];
  return firstBook ? { id: firstBook.id } : null;
});

const dispatch = useDispatch();
const navigate = useNavigate();
 const handleSubmit = (e) => {
  e.preventDefault();
  const book = {id: id + 1,title,author};
  dispatch(addBook(book));
  navigate("/show-books",{replace: true});
 }
 
  return (

    <div>
     <h2>AddBooks</h2>
     <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className="form-field">
        <label htmlFor="author">Author: </label>
        <input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
     </form>
    </div>
  )
}

export default AddBooks