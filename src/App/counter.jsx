import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={ () => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        var classeName = "badge m-2 badge-";
        classeName += (this.props.counter.value === 0) ? "warning" : "primary";
        return classeName;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;