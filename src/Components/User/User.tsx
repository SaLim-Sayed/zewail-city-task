import React from "react";
import interests from "../../data/interests.json";
import { AiFillDelete, AiOutlineUserDelete } from "react-icons/ai";
import { toast } from "react-toastify";

interface UserProps {
  user: {
    id: number;
    name: string;
    following: number[];
    interests?: number[];
  };
  onDeleteUser: (userId: number) => void;
  onRemoveInterest: (userId: number, interestId: number) => void;
}

const User: React.FC<UserProps> = ({
  user,
  onDeleteUser,
  onRemoveInterest,
}) => {
  const getUserInterests = (userInterests: number[]) => {
    return userInterests.map(
      (interestId) =>
        interests.find((interest) => interest.id === interestId)?.name
    );
  };

  const handleDeleteUser = () => {
    onDeleteUser(user.id);
    toast.success(
      <div className="text-center flex text-nowrap p-4">
        User Deleted successfully
      </div>
    );
  };

  const handleRemoveInterest = (interestId: number) => {
    onRemoveInterest(user.id, interestId);
    toast.success(
      <div className="text-center flex text-nowrap">
        User Interest Deleted successfully
      </div>
    );
  };

  return (
    <div className=" flex  min-h-64 flex-col relative gap-4 border-[3px] border-cyan-500 rounded-lg shadow-2xl">
      <div className="flex justify-between p-4 items-center  bg-[#00B5BC] text-white">
        <div className="text-2xl"> {user.name}</div>
        <p>{`  has ${user.following.length} followers`}</p>
      </div>
      <div className="flex flex-col  px-4 ">
        <div className="text-2xl font-[700]">Interests:</div>
        {user.interests && user.interests.length > 0 ? (
          <div className="px-8">
            <ul className="flex flex-col  gap-1">
              {getUserInterests(user.interests).map((interest, index) => (
                <li
                  key={index}
                  className="text-lg font-[500] flex  px-4 justify-between items-center bg-[#d2dce5] w-[50%] rounded-xl"
                >
                  {interest}
                  <AiFillDelete
                    onClick={() => handleRemoveInterest(user.interests![index])}
                    className="ml-2 text-red-800 cursor-pointer"
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-lg font-[500] text-center">No Interests</p>
        )}
      </div>

      <button
        onClick={handleDeleteUser}
        className=" absolute -top-4 -right-2 bg-red-100 text-red-900 rounded-xl h-8 w-28  flex items-center justify-center gap-1"
      >
        Delete{" "}
        <AiOutlineUserDelete
          size={24}
          className="   text-red-900 cursor-pointer"
        />
      </button>
    </div>
  );
};

export default User;
