import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, CheckCircle } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  completedCount: number;
  totalCount: number;
  onClearCompleted: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  onToggleDarkMode,
  completedCount,
  totalCount,
  onClearCompleted,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
    >
      {/* ito ay sample lamang sa pag push */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          My Tasks
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {totalCount === 0
            ? 'No tasks yet'
            : `${completedCount} of ${totalCount} completed`}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {completedCount > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClearCompleted}
            className="px-4 py-2 text-sm text-green-600 dark:text-green-400 
                     hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg 
                     transition-all duration-200 flex items-center gap-2"
          >
            <CheckCircle size={16} />
            Clear Completed
          </motion.button>
        )}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onToggleDarkMode}
          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 
                   dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 
                   transition-all duration-200"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </div>
    </motion.div>
  );
};