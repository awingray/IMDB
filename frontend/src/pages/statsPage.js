import React, {Component} from "react";
import StatsComponent from "../components/statsComponent";


const BASE_URL = 'http://localhost:4000/api/movies/statistics?';


class StatsPage extends Component {
    state = {
        loading: true,
        response: null
    };

    componentDidMount() {
        fetch(BASE_URL).then(
            async (result) => {
                this.setState({
                    loading: false,
                    response: await result.json()
                });
            },
            (error) => {
                console.log(error);
                this.setState({
                    loading: false,
                    error
                })
            }
        );
    };

    formatContent() {
        let {loading, response, error} = this.state;
        if (loading) return (
            <React.Fragment>
                <p className="text-justify text-center text-primary">Fetching data may take a few seconds</p>
                <div className="d-flex justify-content-center text-primary">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"> Loading... </span>
                    </div>
                </div>
            </React.Fragment>
        );
        if (error) return <p className="text-justify text-center text-error">{error}</p>
        console.log(response);
        return <StatsComponent response={response}/>;
    };

    handleToSearch() {
        // TODO: stuff with router here
        console.log("Not Implemented yet :(");
    };

    render() {
        return (
            <React.Fragment>
                <h1 className="text-justify text-center text-white bg-primary">Search Statistics</h1>
                <button onClick={this.handleToSearch}
                        className="btn btn-link text-secondary">
                    <p>{"< Back to search"}</p>
                </button>
                {this.formatContent()}
            </React.Fragment>
        );
    };
}

export default StatsPage;