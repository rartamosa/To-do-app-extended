import React from "react";
import { format } from "date-fns";
import { render } from "react-dom";

const SingleUser = ({ user }) => {
  return (
    <div className="column__element user__column-element">
      <div className="user__container">
        <div>
          <h2 className="column__element-name">{user.name}</h2>
          <div>Created {format(new Date(user.createdAt), "do MMM")}</div>
        </div>
        <div
          className="user__container_img"
          style={{ backgroundImage: `url(${user.imageURL})` }}
        ></div>
        <p className="column__element-description user__container-description">
          {user.description}
        </p>
      </div>
    </div>
  );
};

export default SingleUser;
