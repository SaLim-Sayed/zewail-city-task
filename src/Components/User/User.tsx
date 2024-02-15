import React from "react";
import { interests } from "../../data/data";
import { AiOutlineDelete } from "react-icons/ai";
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
      <div className="text-center flex text-nowrap p-4">
        User Interest Deleted successfully
      </div>
    );
  };

  return (
    <div className=" flex  h-64 flex-col relative gap-4 border-[3px] border-cyan-600 rounded-lg shadow-lg">
      <div className="flex justify-between p-4 items-center  bg-slate-300">
        <div className="text-2xl"> {user.name}</div>
        <p>{`  has ${user.following.length} followers`}</p>
      </div>
      <div className="flex flex-col  px-4 ">
        <div className="text-2xl font-[700]">Interests:</div>
        {user.interests && user.interests.length > 0 ? (
          <div className="px-8">
            <ul>
              {getUserInterests(user.interests).map((interest, index) => (
                <li key={index} className="text-lg font-[500] flex items-center">
                  {index + 1} - {interest}
                  <AiOutlineDelete
                    onClick={() => handleRemoveInterest(user.interests![index])}
                    className="ml-2 text-red-500 cursor-pointer"
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
        className="w-full absolute bottom-0 bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete User
      </button>
    </div>
  );
};

export default User;
