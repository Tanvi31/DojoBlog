import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That Page Cannot be found</p>
            <Link to="/">Back to the Home Page....</Link>
        </div>
    );
};

export default NotFound;
