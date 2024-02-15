import React, { useState, useEffect } from "react";
import User from "./User"; 
import { useUserStore } from "../../Store/userStore";

interface UserListProps {
  users: {
    id: number;
    name: string;
    following: number[];
    interests?: number[];
  }[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const {setCount}=useUserStore()
  const [usersList, setUsersList] = useState(users);

  // useEffect to sort usersList whenever users prop changes
  useEffect(() => {
    // Sort usersList based on follower count
    const sortedUsersList = usersList.slice().sort((a, b) => b.following.length - a.following.length);
    setUsersList(sortedUsersList);
    setCount(usersList.length)
  }, [usersList]); // Trigger useEffect when users prop changes

  const handleDeleteUser = (userId: number) => {
    setUsersList(usersList.filter((user) => user.id !== userId));
    setCount(usersList.length)
  };

  const handleRemoveInterest = (userId: number, interestId: number) => {
    const updatedUsersList = usersList.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          interests: user.interests?.filter(
            (interest) => interest !== interestId
          ),
        };
      }
      
      return user;
    });
    setUsersList(updatedUsersList);
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {usersList.map((user) => (
          <User
            key={user.id}
            user={user}
            onDeleteUser={handleDeleteUser}
            onRemoveInterest={handleRemoveInterest}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
