/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import User from "./User";
import { useUserStore } from "../../Store/userStore";

interface UserListProps {
  users: {
    id: number;
    name: string;
    following: number[];
    interests?: number[];
    noOfFollowers?: any;
  }[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const { setCount } = useUserStore();
  const [usersList, setUsersList] = useState(users);

  const followersCountArr: any = {};

  usersList.forEach((user) => {
    let followersCount = 0;
    usersList.forEach((item) => {
      if (item.following && item.following.includes(user.id)) {
        followersCount++;
      }
    });

    followersCountArr[user.id] = followersCount;
    user.noOfFollowers = followersCount;
  });

  // useEffect to sort usersList whenever users prop changes
  useEffect(() => {
    // Sort usersList based on follower count
    const sortedUsersList = usersList
      .slice()
      .sort((a, b) => (b.noOfFollowers || 0) - (a.noOfFollowers || 0));
    setUsersList(sortedUsersList);
    setCount(usersList.length);
  }, [setCount, usersList]);

  const handleDeleteUser = (userId: number) => {
    // Filter out the deleted user from the usersList

    const updatedUsersList = usersList.filter((user) => user.id !== userId);

    // Update the state with the updated usersList
    setUsersList(updatedUsersList);
    // Update the count
    setCount(updatedUsersList.length);
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 gap-y-8">
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
