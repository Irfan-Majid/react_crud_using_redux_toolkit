import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books:[
        {
            id: 1,
            title: "Love Bangladesh",
            author: "Irf"
        },
        {
            id: 2,
            title: "BD",
            author: "DD"
        }   
    ]
};

export const bookSlice = createSlice({
    name:"books",
    initialState: initialBooks,// Use the initialBooks variable in the initialState object
    reducers:{
        showBooks : (state) => state,
        addBook : (state,action) => {
            state.books.push(action.payload);
        },
        deleteBook : (state,action) => {
            let id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
        },
        updateBook : (state,action) => {
            let {id,title,author} = action.payload;
            const isBookExist = state.books.filter((book) => book.id === id);
            if(isBookExist){
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        },
    }
})

export const {showBooks,addBook,deleteBook,updateBook} = bookSlice.actions;// Fix the typo here: bookSlice instead of booksSlice
export default bookSlice.reducer;