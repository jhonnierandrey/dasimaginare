import React, { Component } from 'react';

class Search extends Component {

    searchRef = React.createRef();

    getData = (e) => {
        e.preventDefault();

        // tomamos el valor del input y enviamos al componente principal
        const query = this.searchRef.current.value

        this.props.searchParameters(query)

        console.log(query);
    }

    render() {
        return (
            <form onSubmit={this.getData}>
                <div className="row gtr-uniform">
                    <div className="col-7 col-12-xsmall">
                        <input ref={this.searchRef} type="text" name="demo-name" id="demo-name" placeholder="Type your search here" />
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