import { motion } from "framer-motion";
import { Check, Trash2, X } from "lucide-react";
import React, { useState } from "react";
import { Todo } from "../../types/todoTypes";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Todo card */}
      <motion.div
        layout
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsModalOpen(true)}
        className="group bg-white dark:bg-gray-800 rounded-xl mt-3 p-4 shadow-sm hover:shadow-md 
                   transition-all duration-200 border border-gray-100 dark:border-gray-700
                   cursor-pointer"
      >
        <div className="flex items-center gap-4">
          {/* Toggle button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onToggle(todo.id);
            }}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                       transition-all duration-200 ${
                         todo.completed
                           ? "bg-green-500 border-green-500 text-white"
                           : "border-gray-300 dark:border-gray-600 hover:border-green-400"
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

          {/* Task & Due Date */}
          <span
            className={`flex-1 ${
              todo.completed
                ? "text-gray-500 dark:text-gray-400 line-through"
                : "text-gray-900 dark:text-gray-100"
            }`}
          >
            <div className="flex justify-between">
              <span className="uppercase font-semibold">{todo.task}</span>
              <div>
                Due Date:{" "}
                <span className="text-red-600 italic">{todo.dueDate}</span>
              </div>
            </div>
          </span>

          {/* Delete button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(todo.id);
            }}
            className="p-2 text-red-500 hover:text-red-600 
                       hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
          >
            <Trash2 size={18} />
          </motion.button>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative"
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4 uppercase">
              task: {todo.task}
            </h2>
            <div className="space-y-2 text-gray-700 ">
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {todo.completed ? "✅ Completed" : "⌛ Pending"}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {todo.description || "No description provided"}
              </p>
              <p>
                <span className="font-semibold">Started Date:</span>{" "}
                <span className="text-red-600">{todo.startDate}</span>
              </p>
              <p>
                <span className="font-semibold">Due Date:</span>{" "}
                <span className="text-red-600">{todo.dueDate}</span>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
