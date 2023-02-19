export interface TodosState {
  todos: Todo[];
  totalPrice: number;
}

export interface Todo {
  id: string;
  title: string;
  price: string;
}

export interface AddTodoAction {
  title: string;
  price: string;
}

export interface DeleteTodoAction {
  id: string;
}
