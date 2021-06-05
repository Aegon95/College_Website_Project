import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import SemesterDataService from "./home.service"
import {Semester} from "../../Models/Semester";

interface HomeState {
    semesters: Semester [] ;
    status: boolean
}

const initialState: HomeState = {
    semesters: [],
    status: true
};


export const fetchSemesters = createAsyncThunk('semesters/fetchSemesters', async () => {
    return await SemesterDataService.getAll()
})

export const deleteSemesters = createAsyncThunk(
    'semesters/deleteSemesters',
    async (id: string, thunkAPI) => {
       await SemesterDataService.delete(id);
        thunkAPI.dispatch(HomeSlice.actions.Delete(id));
    }
)

export const addSemesters = createAsyncThunk(
    'semesters/addSemesters',
    async (semester: Semester) => {
       return await SemesterDataService.create(semester);
    }
)

export const editSemesters = createAsyncThunk(
    'semesters/editSemesters',
    async (semester: Semester, thunkAPI) => {
        await SemesterDataService.update(semester);
        thunkAPI.dispatch(HomeSlice.actions.update(semester));
    }
)


export const HomeSlice = createSlice({
    name: 'semester',
    initialState,
    reducers: {
        Delete: (state, action: PayloadAction<string>) => {
            state.semesters = state.semesters.filter(item => item.id !== action.payload)
        },
        update: (state, action: PayloadAction<Semester>) => {
            const sem = state.semesters.find(item => item.id === action.payload.id)
            if(sem != null){
                sem.name = action.payload.name
                sem.description = action.payload.description
            }
        }

    },
    extraReducers: builder => {
        builder.addCase(fetchSemesters.pending, (state, action) => {
            state.status = true;
        });
        builder.addCase(fetchSemesters.fulfilled, (state, action) => {
            state.status = false;
            // Add any fetched posts to the array
            state.semesters = action.payload
        });
        builder.addCase(fetchSemesters.rejected, (state, action) => {
            state.status = false;
        });
        builder.addCase(addSemesters.fulfilled, (state, action) =>{
            state.semesters.push(action.payload)
        });

    }
});

// The function below is called a thunk and allows us to perform async logic. I

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectSemesterItems = (state: RootState) => state.semester.semesters;

export default HomeSlice.reducer;
