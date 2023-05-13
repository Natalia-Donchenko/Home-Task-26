import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  id: string
  text: string
  edit: boolean
  done: boolean
  important: boolean
};

interface ITodosState {
  todoList: ITodo[]
};

interface IeditTodo {
  id: string
  text: string
};

const initialState: ITodosState = {
  todoList: []
};

const TodoSlider = createSlice({
  name: "todo",
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
      state.todoList = todoList.filter((item): boolean => item.id !== action.payload);
    },

    editTodo: (state, action: PayloadAction<IeditTodo>) => {
      state.todoList = state.todoList.map((item): ITodo => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.text,
            edit: !item.edit,
          };
        }
        return item;
      });
    },

    isDoneTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find((item): boolean => item.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },

    isImportant: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find((item): boolean => item.id === action.payload);
      if (todo) {
        todo.important = !todo.important;
      }
    }
  },
});

export const { addTodo, deleteTodo, isDoneTodo, isImportant, editTodo } = TodoSlider.actions;

export default TodoSlider.reducer;