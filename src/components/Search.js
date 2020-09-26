import React, { Component } from 'react';

class Search extends Component {

    searchRef = React.createRef();
    searchOrientation = React.createRef();

    getData = (e) => {
        e.preventDefault();
        
        const query = this.searchRef.current.value;
        const orientation = this.searchOrientation.current.value;

        this.props.searchParameters(query, orientation);
    }

    render() {
        return (
            <form onSubmit={this.getData}>
                <div className="row gtr-uniform">
                    <div className="col-6 col-12-xsmall">
                        <input className="space-input" ref={this.searchRef} type="text" placeholder="Type your search here" />
                    </div>
                    <div className="col-2 col-12-xsmall">
                        <select className="space-input" name="orientation" ref={this.searchOrientation}>
                            <option value="all">All</option>
                            <option value="vertical">Mobile</option>
                            <option value="horizontal">Desktop</option>
                        </select>
                    </div>
                    <div className="col-3 col-12-xsmall">
                        <input type="submit" value="Search" className="primary button primary fit" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;