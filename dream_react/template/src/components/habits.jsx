import React, { Component, PureComponent } from 'react';
import Habit  from './habit';

class Habits extends Component {
    state = {
        habits:[
            
        ],
    };

    onIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    onDecrement = (habit) => {
        this.props.onDecrement(habit);
    }

    onDelete = (habit) => {
        this.props.onDelete(habit);
    }

    render() {
        // const habits = this.props.habits;
        // if(this.state.habits != habits){
        //     this.setState({habits});
        // }

        return (
            <ul>
                {
                    this.props.habits.map(habit => (
                        <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.onIncrement}
                        onDecrement={this.onDecrement}
                        onDelete={this.onDelete}
                        />
                    ))
                }
            </ul>
        );
    }
}

export default Habits;