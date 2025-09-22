import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { InputField } from "./InputField";

interface TodoFormProps {
  onAddTodo: (text: string, startDate: string, dueDate: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text, startDate, dueDate);
      setText("");
      setStartDate("");
      setDueDate("");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Task Input */}
      <InputField
        label="Task:"
        name="task"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
               placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
      />

      <InputField
        label="Short Description:"
        name="short_description"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a short description..."
        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
               placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
      />

      {/* Date Inputs */}
      <div className="flex flex-col sm:flex-row gap-2">
        <InputField
          label="Date Started:"
          name="started_date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="flex-1 min-w-[140px] px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-all duration-200"
        />
        <InputField
          label="Due Date:"
          name="due_date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="flex-1 min-w-[140px] px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 transition-all duration-200"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 
                 hover:to-blue-700 text-white rounded-xl font-medium shadow-lg 
                 hover:shadow-xl transition-all duration-200 flex items-center justify-center
                 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!text.trim()}
      >
        <Plus size={20} />
        <span className="hidden sm:inline">Add Task</span>
      </motion.button>
    </motion.form>
  );
};
