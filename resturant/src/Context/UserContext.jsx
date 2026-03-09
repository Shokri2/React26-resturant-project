import { useState, createContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

// login, regester, logout
export const CartProvider = ({ Children }) => {
  const [cart, setCart] = useState(null);
  const navegate =useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("currentusers");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const register = (userData) => {
    const { name, email, passpword, role = "user" } = userData;

    // validation
    if (!name || !email || !passpword) {
      toast.error("please fill all fileds");
      return;

    }
    if (passpword.length < 8) {
      toast.error("password must me more than 7 charecters");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isExisted = users.find((user) => user.email === email);
    if (isExisted) {
      toast.error("email already exist please login");
    }
    const newUser = { id: Date.now() ,name, email, passpword, role };
    const updateUsers ={...users,newUser}
    localStorage.setItem("users", JSON.stringify(updateUsers));
    toast.success("register successful try login");
    navegate("/admin/dashboard");
    return true;
  };
const login =( email, passpword) =>{
  const Users =JSON.parse(localStorage.getItem("users")) || [];
  const existUser = Users.find(user =>user.email === email && user.passpword ===passpword)
  if(!existUser){
  const existUser = Users.find(
    (user) => user.email === email && user.passpword === passpword
  );
  if (!existUser){
  toast.error("invaild email or passpword ");
  return;
  }
  localStorage.setItem("current users" ,JSON.stringify(existUser));
  toast.success("login successful");
  return;

}
  return( <UserContext.Provider value={{register,user,login}}>
    {Children}
    </UserContext.Provider>);
}
}