import React from 'react'; 
import {connect} from 'react-redux';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import {setSearchField, requestRobots} from '../actions'
import './App.css'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField, 
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	} 
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
	}
}


class App extends React.Component { 

	componentDidMount () {
		this.props.onRequestRobots();
	}
 

	render() { 
		const { searchField, onSearchChange, robots, isPending, error } = this.props; 

		const filteredRobot = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		if (isPending){
			return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
		}

		if (error !== ""){
		 	return <h1 className='tc'>Ooooops! Failed to load.</h1>
		}
		else
		{
			return (
				<div className="tc"> 
					<h1 className="f2">Robo Pals</h1> 
					<SearchBox searchChange={onSearchChange}/>
					<Scroll> 
						 <CardList robots = { filteredRobot }/> 
					</Scroll>
				</div>
				);
		}	
	} 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);