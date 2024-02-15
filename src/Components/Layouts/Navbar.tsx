import { FiUsers } from "react-icons/fi";
import { useUserStore } from "../../Store/userStore";

export default function Navbar() {
    const {count}=useUserStore()
  return (
    <div className=" flex justify-between items-center shadow-lg h-16 bg-white fixed top-0 w-full z-50">
      <div className="w-[90%] mx-auto flex justify-between">
        <div className=" text-orange-700 text-2xl">Zewail </div>
        <div className="text-orange-700 relative">
          <FiUsers size={24} />
          <div className="absolute -top-2 right-0 bg-red-100 rounded-full w-4 h-4 text-center  flex justify-center items-center">
            {count}
          </div>
        </div>
      </div>
    </div>
  );
}
