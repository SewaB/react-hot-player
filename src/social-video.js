import qs from 'query-string';
import React, {Component, PropTypes} from 'react';

export default class SocialVideo extends Component {

	static PropTypes = {
		service: PropTypes.oneOf(['Youtube', 'Vimeo', 'Dailymotion']).isRequired,
		video: PropTypes.string.isRequired
	};

	static urlMap = new Map([
		['Youtube', 'http://www.youtube.com/embed/'],
   	 	['Vimeo', 'http://player.vimeo.com/video/'],
    	['Dailymotion', 'http://www.dailymotion.com/embed/video/']
	])

	getIdFromVideoString(vString){
		const urlArr = vString.split('/');
	    const idString = urlArr[urlArr.length - 1];
	    const queryParams = qs.extract(vString);

	    return (queryParams && qs.parse(queryParams).v) || idString || '';
	}

	render(){
		const {service, video, ...htmlTags} = this.props;
		const src = `${SocialVideo.urlMap.get(service)}${this.getIdFromVideoString(video)}`;
		
		return(
			<div className="vid">
				<iframe
			        src={src}
			        frameBorder='0'
			        webkitAllowFullScreen
			        mozallowfullscreen
			        allowFullScreen
			        {...htmlTags}
				/>
			</div>
		)
	}
}