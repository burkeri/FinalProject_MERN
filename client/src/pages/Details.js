import React, {Component} from "react";
// import API from '../utils/API';

class Details extends Component {

    componentDidMount() {
        console.log(this.props);
    }


    render() {
        return (
            <div>
                <h1>Details</h1>
                <p>Choice: {this.props.userChoiceID}</p>
            </div>
        );
    }
}

export default Details;
