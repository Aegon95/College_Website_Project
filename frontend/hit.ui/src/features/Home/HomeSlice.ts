import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import SemesterDataService from "./home.service"

interface HomeState {
    semesters: object;
}

const initialState: HomeState = {
    semesters: [],
};

export const HomeSlice = createSlice({
    name: 'semester',
    initialState,
    reducers: {
        fetch: state => {
            SemesterDataService.getAll().then(data => {
                state.semesters = data;
            })
        },
        Delete: (state, action: PayloadAction<string>) => {
            SemesterDataService.delete(action.payload).then()
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        create: (state, action: PayloadAction<number>) => {

        },
        update: state =>{

        }
    },
});

export const { fetch, create, Delete, update } = HomeSlice.actions;

// The function below is called a thunk and allows us to perform async logic. I

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

export default HomeSlice.reducer;
