import _ from 'lodash';
import React , {Component} from 'react';  //to create components
import ReactDOM from 'react-dom';  //to upload the pages to the dom
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCCxCN53DEDjVGlKwyyodmqO8tiV-LqDDs';


//Create a new component which should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [] ,
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term){

    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
    });
      //this.setState({videos})
    });

  }


  render(){
    const videoSearch= _.debounce((term) => { this.videoSearch(term) }, 300 );

    return (
      <div>
          <SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect= {selectedVideo =>  this.setState({selectedVideo}) }
            videos={this.state.videos} />
      </div>
    );
  }

}

//Take this component and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));  //Pass to the render an instance, not a class
