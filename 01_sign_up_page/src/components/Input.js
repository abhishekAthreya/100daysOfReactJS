import React, {Component} from 'react';

class Input extends Component{
    render(){
        return (
            <div className="Input">
                <input id={this.props.name} autocomplete="false" required type={this.props.type} placeholder={this.props.placeholder} />
                <label for={this.props.name}></label>
            </div>
        );
    }
};

export default Input;