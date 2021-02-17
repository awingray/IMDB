import React, {Component} from 'react';

class Loading extends Component {
    render() {
        return (
            <React.Fragment>
                <p className="text-justify text-center text-secondary">Fetching data may take a few seconds</p>
                <div className="d-flex justify-content-center text-secondary">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"> Loading... </span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Loading;