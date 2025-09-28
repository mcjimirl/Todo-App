import { motion } from "framer-motion";
import { Header } from "./components/Header";
// import { TodoForm } from "./components/TodoForm";
import { ListPlus } from "lucide-react";
import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useDarkMode } from "./hooks/useDarkMode";
import { useTodos } from "./hooks/useTodos";

function TodoMain() {
  const { todos, toggleTodo, deleteTodo, clearCompleted, addTodo } = useTodos();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div
      className="min-h-screen min-w-screen bg-gradient-to-br from-gray-50 to-gray-100 
                  dark:from-gray-900 dark:to-gray-800 transition-all duration-300"
    >
      <div className="container px-4 p-8 max-w-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Header
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
            completedCount={completedCount}
            totalCount={totalCount}
            onClearCompleted={clearCompleted}
          />
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl
               border border-gray-200 dark:border-gray-700 p-6 sm:p-8 mx-56"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex flex-row w-fit items-center gap-2 rounded-2xl bg-blue-700 text-white p-4 hover:bg-blue-800 transition"
            >
              <ListPlus size={32} />
              <h3>Add a New Task</h3>
            </button>
            {/* <TodoForm onAddTodo={addTodo} /> */}

            <TodoList
              todos={todos}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
          </div>
        </motion.div>
      </div>
      {/* Modal TodoForm */}
      <TodoForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTodo={addTodo}
      />
    </div>
  );
}

export default TodoMain;
