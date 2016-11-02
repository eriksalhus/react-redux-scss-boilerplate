import * as React from 'react';
import { connect } from 'react-redux';
import './AppComponent.scss';

class AppComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {todo:''};
	}

	addTodo(todo) {
		this.props.dispatch({
			type: 'ADD_TODO',
			todo: {completed: false, todo}
		});
		this.setState({todo:''});
	}

	render() {
		return (
			<div id="AppComponent">
				<input ref={(ref) => this._input = ref} value={this.state.todo} onChange={event => this.setState({todo: event.target.value})}/>
				<button className="primary-btn" onClick={() => this.addTodo(this._input.value)}>Add</button>

				<ul>
					{this.props.todos && this.props.todos.map((todo, index) =>
						<li key={index}>{todo.todo}</li>)}
				</ul>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos.todos
	};
}

export default connect(mapStateToProps)(AppComponent);


AppComponent.propTypes = {
	dispatch: React.PropTypes.func
};
