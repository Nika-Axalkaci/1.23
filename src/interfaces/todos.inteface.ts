export interface Todos {
  _uuid: string;
  id: number;
  todo: string;
}
export interface TodoProps {
  onFormSubmit: (todo: string) => void;
}
export interface InRequset {
  url: string;
  method: string;
}
export interface InReturnTodo {
  todo: string;
}
export interface IntResponse {
  items: Todos[];
}
