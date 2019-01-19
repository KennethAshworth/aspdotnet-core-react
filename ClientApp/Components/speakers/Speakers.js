import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SpeakersHeader from './SpeakersHeader';
import SpeakerList from './SpeakerList';

import axios from 'axios';

class Speakers extends Component {

	componentDidMount() {
		axios.get('/data/speaker.json')
			.then(result => {
				console.log('success');
			})
			.catch(error => {
				if (error.response) {
					console.log(error.responderEnd);
				}
			});
	}

	render() {

	}
}