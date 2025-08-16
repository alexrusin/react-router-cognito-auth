import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Form, NavLink, Outlet } from "react-router";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="space-x-4 text-lg">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Dashboard
            </NavLink>
            {/* user logic to show admin starts */}
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : "hover:underline"
              }
            >
              Admin
            </NavLink>
            {/* user logic to show admin ends */}
          </div>

          <div className="relative">
            <div className="flex">
              {/* add display user name logic */}
              <button
                onClick={() => setOpen(!open)}
                className="text-2xl cursor-pointer"
              >
                <FaUserCircle />
              </button>
            </div>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow z-10">
                <Form method="post" action="auth/logout">
                  <button
                    type="submit"
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Log Out
                  </button>
                </Form>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="p-4 sm:p-6">
        <Outlet />
      </main>
    </div>
  );
}
