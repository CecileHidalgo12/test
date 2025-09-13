import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/home1">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default Landing;