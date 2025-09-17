import React from "react";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast"; // make sure you installed react-hot-toast

function Logout() {
  const [ authUser, setAuthUser ] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null); // clear context completely
      localStorage.removeItem("Users"); // clear storage
      toast.success("Logout successfully");
      
            setTimeout(()=>{
                
                window.location.reload();  
                 
            },2000); 
    } catch (error) {
      toast.error("Error: " + error.message);
       setTimeout(()=>{},3000);
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
