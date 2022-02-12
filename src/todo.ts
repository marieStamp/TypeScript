interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
  
export const getTodosByCount = (count: number): void => {
  const todos: Todo[] = [];
  
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then<Todo[]>((data): Todo[] => {
      for (let i = 0; i < count; i++) {
        todos.push(data[i]);
      }
      return todos;
    })
    .then((todos: Todo[]): void => {
      if (todos.length === 0) {
        throw Error('there is no ToDo');
      }
      console.log(todos);
    });
};