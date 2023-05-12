import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type Todo = {
  id: string
  text: string
  edit: boolean
  done: boolean
  important: boolean
}

type TodosState = {
  todoList: Todo[]
}

interface Edit {
  id: string
  newText: string
  text: string
}

const initialState: TodosState = {
  todoList: []
}


const TodoSlider = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todoList.push({
        id: (Math.round(Math.random() * 100000)).toString(),
        text: action.payload,
        edit: false,
        done: false,
        important: false,
      })

    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<Edit>) => {
      state.todoList = state.todoList.map((item) => {

        console.log(item)
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.newText,
            edit: !item.edit,
          };
        }
        return item;
      });
        



      
      // state.todoList = state.todoList.map((item) =>
      //   item.id === action.payload ? { ...item, text: action.payload } : item
      // );
      // state.edit = !state.edit;
      // console.log(state)
    },

    isDoneTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find((item) => item.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    isImportant: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find((item) => item.id === action.payload);
      if (todo) {
        todo.important = !todo.important;
      }
    }
  },
});

export const { addTodo, deleteTodo, isDoneTodo, isImportant, editTodo } = TodoSlider.actions;

export default TodoSlider.reducer;