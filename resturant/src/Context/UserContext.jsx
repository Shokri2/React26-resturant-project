import { useState, createContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("currentrUsers");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = (userData) => {
    const { name, email, password, role = "user" } = userData;

    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be more than 7 characters");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const isExisted = users.find((user) => user.email === email);

    if (isExisted) {
      toast.error("Email already exists, please login");
      return;
    }

    const newUser = { id: Date.now(), name, email, password, role };

    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success("Register successful. Try login");

    navigate("/login");
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existUser = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!existUser) {
      toast.error("Incorrect email or password");
      return;
    }

    localStorage.setItem("currentrUsers", JSON.stringify(existUser));

    setUser(existUser);

    toast.success("Login successful");

    if (existUser.role === "user") {
      navigate("/user/dashboard");
    } else {
      navigate("/admin/dashboard");
    }
  };

  const logout = () => {
    localStorage.removeItem("currentrUsers");
    setUser(null);
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{
        register,
        login,
        logout,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};