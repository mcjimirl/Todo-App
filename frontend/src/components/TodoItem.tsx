import React from 'react';
import { motion } from 'framer-motion';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md 
               transition-all duration-200 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onToggle(todo.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                     transition-all duration-200 ${
                       todo.completed
                         ? 'bg-green-500 border-green-500 text-white'
                         : 'border-gray-300 dark:border-gray-600 hover:border-green-400'
                     }`}
        >
          {todo.completed && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Check size={16} />
            </motion.div>
          )}
        </motion.button>

        <span
          className={`flex-1 transition-all duration-300 ${
            todo.completed
              ? 'text-gray-500 dark:text-gray-400 line-through'
              : 'text-gray-900 dark:text-gray-100'
          }`}
        >
          {todo.text}
        </span>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onDelete(todo.id)}
          className="opacity-0 group-hover:opacity-100 p-2 text-red-500 hover:text-red-600 
                   hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
        >
          <Trash2 size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
};