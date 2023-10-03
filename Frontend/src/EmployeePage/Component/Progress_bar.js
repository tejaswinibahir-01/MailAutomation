import React from 'react'

const Progress_bar = ({bgcolor,progress,height,total,complete}) => {
	
	const Parentdiv = {
		height: height,
		width: '75%',
		backgroundColor: '#B0DAFF',
		borderRadius: 40,
		margin: 50,
	}
	
	const Childdiv = {
		height: '100%',
		width: `${(complete/total)*100}%`,
		backgroundColor: bgcolor,
		borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'white',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		{/*<span style={progresstext}>{`$complete/` `${total}` }</span>*/}
		<p  style={progresstext}>{complete}/{total}</p>
	</div>
	</div>
	)
}

export default Progress_bar;
