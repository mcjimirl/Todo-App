import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Todo } from "../../types/todoTypes";
import checklist from "../assets/imgs/checklist.png";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
}) => {
  if (todos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" py-12"
      >
        <div className="flex justify-center text-6xl mb-4">
          <img src={checklist} alt="" />
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-lg text-center">
          No tasks yet. Add one above to get started!
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-3">
      <AnimatePresence mode="popLayout">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
