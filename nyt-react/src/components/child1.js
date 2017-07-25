import React from 'react';

var Child1 = React.createClass({

	render() {
		return (
			<div className="jumbotron">
				<form>
				  <div class="form-group">
				  	<h3> Search </h3>
				    <label for="title"> Title: </label>
				    <input type="title" class="form-control" id="title" placeholder="Title"/>
				  </div>
				  <div class="form-group">
				    <label for="startYear">Start Year: </label>
				    <input type="date" class="form-control" id="startYear" placeholder="Start Year"/>
				  </div>
				  <div class="form-group">
				    <label for="endYear">End Year: </label>
				    <input type="date" class="form-control" id="endYear" placeholder="End Year"/>
				  </div>
				  <button type="submit" class="btn btn-default">Search</button>
				</form>
			</div>
		);
	}
});

export default Child1;