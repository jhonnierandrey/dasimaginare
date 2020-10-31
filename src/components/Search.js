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
                <div className="form-row">
                    <div className="col-12 col-sm-6">
                        <input className="form-control" ref={this.searchRef} type="text" placeholder="Type your search here" />
                    </div>
                    <div className="col-12 col-sm-2">
                        <select className="form-control" name="orientation" ref={this.searchOrientation}>
                            <option value="all">All</option>
                            <option value="vertical">Mobile</option>
                            <option value="horizontal">Desktop</option>
                        </select>
                    </div>
                    <div className="col-12 col-sm-3">
                        <input type="submit" value="Search" className="btn btn-secondary btn-lg" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;