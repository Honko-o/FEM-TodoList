import { createSlice } from '@reduxjs/toolkit';

const initState = [
    {
        id: '5',
        taskDescription: 'Learn Javascript Maximillian',
        completed: false,
    },
    {
        id: '6',
        taskDescription: 'Learn React',
        completed: false,
    },
    {
        id: '7',
        taskDescription: 'Make To do List',
        completed: false,
    },
];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initState,
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: crypto.randomUUID(),
                taskDescription: action.payload,
                completed: false,
            });
        },
        deleteTask: (state, action) => {
            return state.filter((el) => el.id !== action.payload);
        },
        toggleComplete: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            todo.completed = !todo.completed;
        },
        clearAllCompleted: (state) => {
            return state.filter((task) => !task.completed);
        },
        reOrderTasks: (state, action) => {
            if (!action.payload.destination) {
                return;
            }
            if (action.payload.index === action.payload.source.index) {
                return;
            }
            const [removed] = state.splice(action.payload.source.index, 1);
            state.splice(action.payload.destination.index, 0, removed);
        },
    },
});

export const {
    addTask,
    deleteTask,
    toggleComplete,
    clearAllCompleted,
    reOrderTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
