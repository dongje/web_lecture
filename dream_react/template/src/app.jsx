
import { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import Habits from './components/habits';
import Reset from './components/reset';
import HabitAddForm from './components/habitAddForm';

class App extends Component {

  state = {
    habits:[
        {id:1 , name: 'reading' , count: 0} ,
        {id:2, name: 'running' , count: 0},
        {id:3 , name: 'coding' , count: 0},
    ],
    counts : 0
  };

  onIncrement = (habit) => {
    // const who = this.state.habits.find(element => element.id == habit.id);
    // const where = this.state.habits.indexOf(who);
    // console.log(where);
    // habit.count += 1;
    // this.setState({ } );

    // const habits = [...this.state.habits];
    // const where = this.state.habits.indexOf(habit);
    // habits[where].count += 1;
    // this.setState({habits : habits});

    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit,count:habit.count + 1};
      } 
      return item;
    })
    this.setState({habits : habits});
  };
  
  onDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const where = this.state.habits.indexOf(habit);
    // const count = habits[where].count - 1;
    // habits[where].count = count <0 ? 0 : count;
    // this.setState({habits : habits});

    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = item.count - 1;
        return {...habit,count:count <0? 0 : count};
      } 
      return item;
    })
    this.setState({habits : habits});
}

onDelete = (habit) => {
    // const habits = [...this.state.habits];
    // const where = this.state.habits.indexOf(habit);
    // habits.splice(where,1);
    const habits = this.state.habits.filter(item => item.id != habit.id);
    this.setState({habits : habits});
  }


  gethabit = (habitname) => {
    const habits = [...this.state.habits];
    const habit = {id:habits.length+1 , name : habitname , count : 0};
    habits.push(habit);
    this.setState({habits});
    console.log(this.state.habits);
  } 

  updatehabits = (habits) => {
    this.setState({habits});
    this.sumCount();
  }

  sumCount = () => {
    const counts = this.state.habits.map(habit => habit.count);
    const sum = counts.reduce((sum,current) => {return sum+current},0);
    console.log(sum);
    if(this.state.counts != sum){
      this.setState({counts:sum});
    }
  }

  resetall = () => {
    const resets = this.state.habits.map(habit => {
      if(habit.count == 0){
        return habit;
      }
      return {...habit,count : 0};
    })
    console.log('reset');
    this.setState({habits : resets});
  }

    render(){
      this.sumCount();
      return (
        <>
        <Navbar count = {this.state.counts}/>
        <HabitAddForm gethabit = {this.gethabit} habits = {this.state.habits}/>
        <Habits habits = {this.state.habits} 
                onIncrement = {this.onIncrement} 
                  onDecrement = {this.onDecrement} 
                  onDelete = {this.onDelete}
          />
        <Reset resetall = {this.resetall}/>
        </>
      );
  }
}
export default App;

<App / >;



