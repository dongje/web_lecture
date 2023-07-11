import React, { Component, memo, PureComponent } from 'react';



const HabitAddForm = memo(props => {

    const state = {
        habit:''
    }

    const inputRef = React.createRef();

    const add = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        if(state.habit == ''){
            return;
        }
        if(this.props.habits.find(habit => habit.name == this.state.habit)){
            console.log('same');
            return;
        }
        name && props.gethabit(name);
        inputRef.current.value = '';
        // this.props.gethabit(this.state.habit);
    }

        return (
            <form className='add-form' onSubmit={add} placeholder='habit' type='text'>
                <input ref={inputRef} />
                <button className='add-btn' >Add</button>
            </form>
        );
    }
);

export default HabitAddForm;
