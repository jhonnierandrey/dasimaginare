import React, { Component } from 'react';

class Search extends Component {

    searchRef = React.createRef();
    searchOrientation = React.createRef();

    getData = (e) => {
        e.preventDefault();
        
        const query = this.searchRef.current.value;
        //const orientation = this.searchOrientation.current.value;

        this.props.searchParameters(query);
    }

    render() {
        return (
            <form onSubmit={this.getData}>
                <div className="form-row">
                    <input className="form-control col-9" ref={this.searchRef} type="text" placeholder="Type your search here" maxLength="50"/>
                    <button type="submit"   className="btn btn-secondary btn-lg col-3">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        );
    }
}

export default Search;