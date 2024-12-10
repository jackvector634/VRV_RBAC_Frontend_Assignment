import React, { useState } from "react";
import UserTable from "../components/UserManagement/UserTable";
import RoleTable from "../components/RoleManagement/RoleTable";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="dashboard flex h-screen">
      {/* Sidebar */}
      <aside className="bg-purple-100 text-purple-900 w-64 flex flex-col">
        <nav className="flex-grow p-4 space-y-6">
          <button
            className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200 ${
              activeTab === "users"
                ? "bg-purple-700 text-white shadow-lg"
                : "bg-purple-200 hover:bg-purple-300"
            }`}
            onClick={() => setActiveTab("users")}
          >
            👤 User Management
          </button>
          <button
            className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200 ${
              activeTab === "roles"
                ? "bg-green-700 text-white shadow-lg"
                : "bg-green-200 hover:bg-green-300"
            }`}
            onClick={() => setActiveTab("roles")}
          >
            ⚙️ Role Management
          </button>
        </nav>
        <footer className="p-4 text-center text-sm text-purple-700 border-t border-purple-200">
          © 2024 Dashboard Inc.
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-br from-gray-50 to-gray-200 p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {activeTab === "users" ? "User Management" : "Role Management"}
          </h1>
        </header>
        <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          {activeTab === "users" ? <UserTable /> : <RoleTable />}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
