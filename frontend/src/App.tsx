import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 
                  dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl 
                   border border-gray-200 dark:border-gray-700 p-6 sm:p-8"
        >
          <Header
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
            completedCount={completedCount}
            totalCount={totalCount}
            onClearCompleted={clearCompleted}
          />
          
          <TodoForm onAddTodo={addTodo} />
          
          <TodoList
            todos={todos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default App;