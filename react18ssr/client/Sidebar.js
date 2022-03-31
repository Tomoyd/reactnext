import React from 'react';

export default function Sidebar() {
	return (
		<>
			<h1>Archive</h1>
			<ul
				onClick={() => {
					alert('1234');
				}}
			>
				<li>May 2021</li>
				<li>April 2021</li>
				<li>March 2021</li>
				<li>February 2021</li>
				<li>January 2021</li>
				<li>December 2020</li>
				<li>November 2020</li>
				<li>October 2020</li>
				<li>September 2020</li>
			</ul>
		</>
	);
}
