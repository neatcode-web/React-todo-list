/**================================================
JS : MY CUSTOM SCRIPTS
===================================================*/

/** @jsx React.DOM */

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText, index) {
      return <p key={index + itemText}>{itemText}</p>;
    };
    return <div className="list-container">{this.props.items.map(createItem)}</div>;
  }
});

var ToDoApp = React.createClass({
	getInitialState: function() {
		return {items: [], text: ''};
	},
	addToList: function(e) {
		if(this.state.text === '') {
			return;
		}
		var nextItems = this.state.items.concat([this.state.text]);
    
    var nextText = '';

    this.setState({items: nextItems, text: nextText});
		
		var createNewEle = function(itemText, index) {
			return <p key={index + itemText}>{itemText}</p>
		}

		console.log(this.props.items.map(createNewEle))
		// return this.props.items.map(createNewEle);
	},
	onChange: function(e) {
		this.setState({text: e.target.value});
	},
	render: function() {
	  return (

	  	<div className="main-container">
	  		<h2>items List</h2>
	  		<input className="add-to-list" placeholder="Add to list" onChange={this.onChange} value={this.state.text}/>
	  		<button className="add-btn" onClick={this.addToList}>Add</button>

				<TodoList items={this.state.items}/>
	  	</div>  	

	  );
	}
});

//Instruct the page to use above component
React.render(<ToDoApp />, document.body);