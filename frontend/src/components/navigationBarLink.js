import {Link} from "react-router-dom";
import {Component} from "react";

class NavigationBarLink extends Component {
    getActiveClass(route, current) {
        return (route === current) ? "active" : "" ;
    }

    render() {
        const {name, route, current} = this.props;

        return (
        <li className={this.getActiveClass(route, current)}>
            <Link className="nav-link" to={route}>
                {name}
            </Link>
        </li>);
    };
}


export default NavigationBarLink;