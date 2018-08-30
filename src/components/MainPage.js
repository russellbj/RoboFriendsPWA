import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import CardList from '../components/CardList';

class MainPage extends Component {
    componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots= () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }
  render() {
    const { robots, onSearchChange, isPending } = this.props;
    return (
      <div className='tc'>
        <Header/>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundary>
              <CardList robots={this.filterRobots(robots)} />
            </ErrorBoundary>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage