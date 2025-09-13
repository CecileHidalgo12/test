
import { Link } from "react-router-dom";

const Home = () => {
  

  return (
    <div>
      <h2>Homepage</h2>
      <p>Welcome to the homepage!</p>

    
     <Link to = "/araneta"> <button> Go to araneta </button> 
      </Link>
      <Link to = "/moa1"><button> Go to MOA </button> 
      </Link>
     <Link to = "/philarena1" ><button> Go to PhilArena </button> 
      </Link>
    </div>
  );
};

export default Home;