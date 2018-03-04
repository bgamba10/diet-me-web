import React, {Component} from "react";

export class DietInfo extends Component{

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<p>Weight: {this.props.user.weight}</p>
					</div>
					<div className="col-sm-3">
						<p>Height: {this.props.user.height}</p>
					</div>
					<div className="col-sm-3">
						<p>bmi: {this.props.user.bmi}</p>
					</div>
					<div className="col-sm-3">
						<p>Why Lose?: {this.props.user.whyLose}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-3">
						<p>Life Style: {this.props.user.lifeStyle}</p>
					</div>
					<div className="col-sm-3">
						<p>Sport: {this.props.user.sport}</p>
					</div>
					<div className="col-sm-3">
						<p>Intensity: {this.props.user.intensity}</p>
					</div>
					<div className="col-sm-3">
						<p>Diet Type: {this.props.user.dietType}</p>
					</div>
				</div>
			</div>
		);
	}
}