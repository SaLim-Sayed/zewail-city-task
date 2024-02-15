import React, { useState } from "react";
import User from "./User"; 

interface UserListProps {
  users: {
    id: number;
    name: string;
    following: number[];
    interests?: number[];
  }[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [usersList, setUsersList] = useState(users);

  const handleDeleteUser = (userId: number) => {
    setUsersList(usersList.filter((user) => user.id !== userId));
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
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
