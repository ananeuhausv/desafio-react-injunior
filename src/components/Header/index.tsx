import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <button>
                <Link to="/home/genre">
                Genre
                </Link>
            </button>
            <div>
            <button>
                <Link to="/home/details">
                Details
                </Link>
            </button>
            <button>
                <Link to="/">
                Login
                </Link>
            </button>
            </div>
        </>
    )
}