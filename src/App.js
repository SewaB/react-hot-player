import React, { Component } from 'react';
import SocialVideo from './social-video';
import { Button } from 'react-bootstrap';
var videos = [
  {
    service: 'Youtube',
    video: 'https://www.youtube.com/watch?v=XxVg_s8xAms'
  },
  {
    service: 'Vimeo',
    video: 'https://vimeo.com/151715092'
  },
  {
    service: 'Dailymotion',
    video: 'http://www.dailymotion.com/video/x3oc771_la-voiture-du-futur_tech'
  }
];

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			videoIndex:0
		}
	}

	goToVideo(index){
		let videoIndex = index;
		if ( videoIndex < 0){
			videoIndex = videos.length - 1;
		} else if ( videoIndex >= videos.length) {
			videoIndex = 0;
		}
		this.setState({
			videoIndex
		})
	}

  render() {
  	const {service,video} = videos[this.state.videoIndex];
    return (
    	<div>
    		<h1 className="text">SewaStube</h1>
    		<h2>{service}</h2>
        	<span>{video}</span>
        	<SocialVideo service={service} video={video} width={500} height={270} />
    		
    		<Button bsStyle="primary" className="btn" onClick={this.goToVideo.bind(this,this.state.videoIndex - 1)}>
    			Previous
    		</Button>
    		<Button bsStyle="info" className="btn" onClick={this.goToVideo.bind(this,this.state.videoIndex + 1)}>
    			Next
    		</Button>
    	</div>
    );
  }
}
