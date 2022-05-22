import React from "react";
import UserItem from "./UsersItem";

const Users = ({ personData }) => {
  return (
    <div className="row py-4">
      {personData.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
export default Users;
