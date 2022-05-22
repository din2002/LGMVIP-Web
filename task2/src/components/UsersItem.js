import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 py-3">
      <div className="card mx-auto border-2 border-dark" style={{ width: "18rem" }}>
        <img src={user.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
          <p className="card-text">{`${user.email}`}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
