import Avatar from "avatox";
import { motion } from "framer-motion";
import { CheckCircle, Moon, Sun } from "lucide-react";
import React from "react";
// import logo from "../assets/imgs/TD.png";

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
}

// Example single lead data
const defaultLead: Lead = { id: "1", firstName: "John", lastName: "Doe" };

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  completedCount: number;
  totalCount: number;
  onClearCompleted: () => void;
  lead?: Lead;
}

export const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  onToggleDarkMode,
  completedCount,
  onClearCompleted,
  lead = defaultLead,
}) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 px-2"
    >
      {/* Left section */}
      <div className="flex flex-col sm:flex-row sm:items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1 uppercase">
          To-Do App
        </h1>
      </div>

      {/* Right section */}
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

        {lead && (
          <Avatar
            key={lead.id}
            name={`${lead.firstName} ${lead.lastName}`}
            size="lg"
            className="h-16 w-16 rounded-full border border-gray-200 dark:border-gray-700"
          />
        )}
      </div>
    </motion.header>
  );
};
