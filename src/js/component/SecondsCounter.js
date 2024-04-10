import React from 'react'

const SecondsCounter = (props) =>{
    return (
        <div className="text-center">
			<div className="bigCounter">
				<div className="clock"><i class="fa-regular fa-clock"></i></div>
				<div className="six">{props.digitSix % 10}</div>
				<div className="five">{props.digitFive % 10}</div>
				<div className="four">{props.digitFour % 10}</div>
				<div className="three">{props.digitThree %10}</div>
				<div className="two">{props.digitTwo % 10}</div>
				<div className="one">{props.digitOne % 10}</div>
			</div>
		</div>
    )
}

export default SecondsCounter
