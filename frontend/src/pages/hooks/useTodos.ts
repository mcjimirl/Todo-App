import { useEffect, useState } from "react";
import { Todo } from "../../types/todoTypes";

const STORAGE_KEY = "todos";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos).map((todo: Todo) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
        }));
        setTodos(parsedTodos);
      } catch (error) {
        console.error("Error loading todos from localStorage:", error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (
    task: string,
    description: string,
    startDate: string,
    dueDate: string
  ) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      task: task.trim(),
      description: description.trim(),
      startDate,
      dueDate,
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  };
};
