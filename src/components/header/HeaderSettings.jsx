"use client";
import React, { useState, useRef, useEffect } from "react";
import { Settings } from "lucide-react";
import Link from "next/link";

const HeaderSettings = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef(null);

  useEffect(() => {
    // Close settings dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target) &&
        !event.target.closest(".header-settings-toggle")
      ) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="relative" ref={settingsRef}>
      <button
        onClick={toggleSettings}
        className="header-settings-toggle p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Settings className="w-5 h-5" />
      </button>
      
      {isSettingsOpen && (
        <div className="absolute -right-4 top-full mt-5 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50 min-w-[180px]">
          <ul className="py-1">
            <li>
              <Link
                href="/account-settings"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsSettingsOpen(false)}
              >
                Account Settings
              </Link>
            </li>
            <li>
              <Link
                href="/profile-settings"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsSettingsOpen(false)}
              >
                Profile Settings
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderSettings;