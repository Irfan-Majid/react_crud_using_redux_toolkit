import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const BooksView = () => {
  const books = useSelector((state)=>state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  }
  return (
    <div>
      <h1>List of Books</h1>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Author</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book)=> {
            const {id,title,author} = book;
            return <tr key={id}>
              <td>{id}</td> 
              <td>{title}</td> 
              <td>{author}</td> 
              <td>
               <Link to="/edit-book" state={{id,title,author}}>
                <button>Edit</button>
               </Link>
                <button onClick={() => {handleDelete(id)}}>Delete</button>
              </td>
            </tr>
          })}
        </tbody>    
      </table>
    </div>
  )
}

export default BooksView


// import React from 'react'
// import { useSelector } from 'react-redux';

// const BooksView = () => {
//   const books = useSelector((state)=>state.booksReducer.books);
//   return (
//     <div>
//       <h1>List of Books</h1>
//       <table>
//         <thead>
//           <tr>
//             <td>ID</td>
//             <td>Title</td>
//             <td>Author</td>
//             <td>Action</td>
//           </tr>
//         </thead>
//         <tbody>
//           {books && books.map((book)=> {
//             const {id,title,author} = book;
//             return (
//               <tr key={id}>
//                 <td>{id}</td> 
//                 <td>{title}</td> 
//                 <td>{author}</td> 
//                 <td>
//                   <button>Edit</button>
//                   <button>Delete</button>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default BooksView