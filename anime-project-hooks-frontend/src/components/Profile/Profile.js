import React from "react";
import axios from "axios";
import Cookie from "js-cookie";

function Profile() {

  async function handleUpdate() {
    const cookie = Cookie.get("jwt-cookie");

    try {
      let result = await axios.put(
        "http://localhost:3001/api/users/update-profile",
        {},
        {
          headers: {
            authorization: `Bearer ${cookie}`,
          },
        }
      );


    } catch (e) {


    }
  }

  return (
    <div>
      Profile
      <button onClick={handleUpdate}>Click Me</button>
    </div>
  );
}

export default Profile;