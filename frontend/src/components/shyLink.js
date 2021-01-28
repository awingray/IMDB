import {useHistory} from "react-router-dom";

function ShyLink({label, route}) {
    const history = useHistory();

    /**
     * Reroute when the button is pressed.
     */
    function handleClick() {
        history.push(route);
    }

    return (
        <button onClick={handleClick}
                className="btn btn-link text-secondary">
            <p>
                {label}
            </p>
        </button>
    );

}

export default ShyLink;