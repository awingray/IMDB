import React, {Component} from "react";
import Loading from "./loading";

class Table extends Component {
    state = {
        loading: true,
        page: 0,
        content: [],
        nextContent: [],
    }

    /**
     * This function initializes the table by querying the first 2 pages.
     */
    async componentDidMount() {
        this.setState({
            loading: false,
            content: await this.getPage(0),
            nextContent: await this.getPage(1),
        });
    }

    /**
     * Dummy function returns a page of the table.
     * @param page The page number.
     * @returns An array of objects to populate the table.
     */
    async getPage(page) {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(500); // simulated delay
        if (page === 0) return [{n: 0}, {n: 1}, {n: 2}, {n: 3}, {n: 4}, {n: 5}, {n: 6}, {n: 7}, {n: 8}, {n: 9}];
        else if (page === 1) return [{n: 10}, {n: 11}, {n: 12}, {n: 13}, {n: 14}];
        else if (page === 2) return [{n: 20}, {n: 21}, {n: 22}, {n: 23}, {n: 24}];
        return [];
    }

    /**
     * Dummy function.
     * @return {JSX.Element} The formatted header of the table.
     */
    formatHead() {
        return (
            <React.Fragment>
                <th>Name</th>
                <th>Year</th>
            </React.Fragment>
        );
    }

    /**
     * Dummy function populates a row of the table with an object.
     * @param The object to format.
     * @return {JSX.Element} The formatted row of the table.
     */
    formatRow({n}) {
        return (
            <React.Fragment>
                <tr>
                    <td className="align-middle">{"Dummy name " + n}</td>
                    <td className="align-middle">{n + " feb 2021"}</td>
                </tr>
            </React.Fragment>
        );
    }

    /**
     * This function handles the case the previous button was pressed.
     */
    handlePrevious = async () => {
        if (!this.state.page || this.state.loading) return;
        const page = this.state.page - 1;
        this.setState({
            loading: true,
            page: page,
        });
        this.setState({
            loading: false,
            content: await this.getPage(page),
            nextContent: this.state.content,
        });
    }

    /**
     * This function handles the case the next button was pressed.
     */
    handleNext = async () => {
        if (!this.state.nextContent.length || this.state.loading) return;
        const page = this.state.page + 1;
        this.setState({
            loading: true,
            page: page,
        });
        this.setState({
            loading: false,
            content: this.state.nextContent,
            nextContent: await this.getPage(page + 1),
        });
    }

    /**
     * This function renders the table itself unless it is loading.
     */
    renderTable() {
        if (this.state.loading) return <Loading />
        return (
            <table className="table table-striped table-condensed">
                <thead><tr>{this.formatHead()}</tr></thead>
                <tbody>{this.state.content.map(this.formatRow)}</tbody>
            </table>
        );
    }

    render() {
        const buttonClass = "btn btn-secondary";
        const canPrevious = (this.state.page && !this.state.loading) ? "" : " disabled";
        const canNext = (this.state.nextContent.length && !this.state.loading) ? "" : " disabled";
        return (
            <div className="m-4">
                {this.renderTable()}
                <div className="text-center row mt-2">
                    <div className="col text-right">
                        <button type="button" className={buttonClass + canPrevious} onClick={this.handlePrevious}>
                            Previous
                        </button>
                    </div>
                    <div className="col align-middle">
                        <p>
                            {this.state.page}
                        </p>
                    </div>
                    <div className="col text-left">
                        <button type="button" className={buttonClass + canNext} onClick={this.handleNext}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;