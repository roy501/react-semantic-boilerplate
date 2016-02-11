import React from 'react';
export default () => {
	return(
		<div className="ui visible inverted left vertical sidebar menu">
			<a className="item">
				<i className="block home icon"></i>
				Home
			</a>
			<a className="item">
				<i className="block layout icon"></i>
				Topics
			</a>
			<a className="item">
				<i className="smile icon"></i>
				Friends
			</a>
			<a className="item">
				<i className="calendar icon"></i>
				History
			</a>
		</div>
	);
};