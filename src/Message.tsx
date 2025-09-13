import { Link } from "react-router-dom";

function Message() {
  const name = "arenas";
  return (
    <div>
      <h1>{name}</h1>
      {/* 👇 Back button */}
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Message;