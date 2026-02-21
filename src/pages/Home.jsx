import React, { useEffect, useState } from "react";
import axios from "axios";
import User from ".  /components/User.jsx"
function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUsers(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 500);
  });

  return (
    <div>
      {users.map((user) => (
				<User 
				name={user.name} 
				id={user.id} 
				email={user.email}
				username={user.username}  
				/>
				))}
    </div>
  );
}

export default Home;
