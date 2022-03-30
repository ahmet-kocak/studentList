import React from 'react';

function ResidentsList(props) {

	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{props.data&&props.data.map((item,i)=>{return(
					<li key={i} className="slide-up-fade-in">
				{item.substring(0, 1).toUpperCase()+item.substring(1).toLowerCase()}
				</li>
				)})}
				
			</ul>
		</div>
	);

}

export default ResidentsList;
