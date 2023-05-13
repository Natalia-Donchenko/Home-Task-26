import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container ">
      <Link to="/users?">
        <div className="home__showList">
          Show list of users
        </div>
      </Link>
    </div>
  );
};

export default Home;