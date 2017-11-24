import React, {Component} from 'react'
import axios from 'axios'

const API ='AIzaSyB1Y8v3x1eVu7ZAtO5wK-zM7NKQtwo1c7A'
const channelId = 'UCXgGY0wkgOzynnHvSEVmE3A'
const result = 10;
const maxResults = 10


//https://www.googleapis.com/youtube/v3/search?key=AIzaSyB1Y8v3x1eVu7ZAtO5wK-zM7NKQtwo1c7A&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10


// var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component{

	constructor(props){
		super(props);

		this.state ={
			result: [],search:'',select:'10'
		}
	}

// 	clicked = ()=>{
// 		//console.log('clicked')
// 		axios.get(finalURL)
// 		  .then(response => {
// 		  	//console.log(response.data)
// 		  	const resultyt1 = response.data.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId)
// 		    this.setState({result:resultyt1});
// 		    console.log(this.state.resultyt);
// 		  })
// 		  .catch(error=> {
// 		    console.log(error);
// 		  });
// 	}

	handleInputChange =(e) =>{
		this.setState({search:e.target.value})
		
	}

	handleSearch =(e) =>{
		e.preventDefault();
		this.search();

	}

	search =(e) =>{
		const {search,select} = this.state
		const searchUrl =`https://www.googleapis.com/youtube/v3/search?key=${API}&maxResults=${select}&part=snippet&q=${search}`
		axios.get(searchUrl)
			.then(response =>{
			  console.log(response.data)
			  const searchResult = response.data.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId)
			  this.setState({result:searchResult});
		      console.log(this.state.resultyt);
			})
			.catch(error=> {
		      console.log(error);
		  	});
	}

	favoriteChannel =(e) =>{
		const Url =`https://www.googleapis.com/youtube/v3/channels?key=${API}&part=snippet&forUsername=${this.state.channel}&maxResults=${select}`
		axios.get(Url)
		    .then(response =>{
		    	console.log(response.data)
		    })
		    .catch(error=> {
		      console.log(error);
		  	});
	}

	handleSelectChange =(e)=>{
		this.setState({select:e.target.value})
		this.search();

	}
	render(){
		//console.log(finalURL)
		console.log(this.state.resultyt);
		return( 
			<div>
				<input type="text" value={this.state.search} onChange={this.handleInputChange}/><button onClick={this.handleSearch}>Search</button>
				<select value={this.state.select} onChange={this.handleSelectChange}>
				  <option value='5' >5</option>
				  <option value='10' >10</option>
				  <option value='30' >30</option>
				  <option value='50' >50</option>
				</select>

				
					{
						this.state.result.map((link, id) =>{
							console.log(link)
							var frame = <div key={id} className="youtube"><iframe width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
							return frame
						})
					}
					{this.frame}
				
					  
				
			</div>
			)
					
	}
}

export default Youtube 