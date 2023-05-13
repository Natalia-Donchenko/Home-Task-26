export interface ITodo {
  id: string
  text: string
  edit: boolean
  done: boolean
  important: boolean
};

export interface ITodosState {
  todoList: ITodo[]
};

export interface IeditTodo {
  id: string
  text: string
};