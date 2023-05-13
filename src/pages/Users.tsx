import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../utils/types";


const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await response.json();
      setUsers(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <ul className="users__list">
        {users.map((user: IUser) => (
          <li key={user.id} className="users__list-item">
            <Link to={`/albums?userId=${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;