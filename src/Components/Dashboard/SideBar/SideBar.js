import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./SideBar.css";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://mighty-cliffs-97551.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <aside className="py-3">
      <ul>
        <div>
          <li>
            <i className="fa fa-plus-square" aria-hidden="true"></i>{" "}
            <Link className="link" to="/addtickets">
              Add Tickets
            </Link>
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default SideBar;
