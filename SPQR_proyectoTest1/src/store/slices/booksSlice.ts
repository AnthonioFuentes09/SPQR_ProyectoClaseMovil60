import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface Book{
    name : string,
    author : string,
    year : number,
    genre : string,
    rating : string,
    publishDate : string
}

interface BooksState {
    books: Book[];
    selectedBook: Book | null;
}

const initialState : BooksState = {
    selectedBook: null,
    books: []
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        // setSelectedBook: (state, action: PayloadAction<Book>) => {
        //     Object.assign(state, action.payload);
        // },
        addBook: (state, action: PayloadAction<Book>) => {
            state.books.push(action.payload);
        },
        clearBook: () => initialState,
    }
});

//exportar las acciones para usarlas en los componentes
export const { addBook,clearBook } = booksSlice.actions;
//exportar el reducer de book como default para usarlo en el store
export default booksSlice.reducer;