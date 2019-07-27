import React from 'react'; 
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'


class App extends React.Component {
	constructor (){
		super();
		this.state = {
		robots: [],
		searchField: ''
    	}
	}


	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users')
	    .then(response => response.json())
	    .then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
		
	}

	render() {
		const { robots, searchField} = this.state;

		const filteredRobot = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		if (!robots.length){
			return <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
		}
		else
		{
			return (
				<div className="tc"> 
					<h1 className="f2">Robo Pals</h1> 
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					<CardList robots={ filteredRobot } />
					</Scroll>
				</div>
				);
		}	
	} 
}

export default App