export interface Todo {
  id: string;
  task: string;
  description: string;
  startDate: string;
  dueDate: string;
  completed: boolean;
  createdAt: Date;
}
