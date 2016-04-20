import * as React from 'react';
import { connect } from 'react-redux';
import './AppComponent.scss';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onSaveHandler = this.onSaveHandler.bind(this);
    this.onCancelHandler = this.onCancelHandler.bind(this);
  }

  onSaveHandler() {
    this.props.dispatch({type: 'SAVE'});
  }

  onCancelHandler() {
    this.props.dispatch({type: 'CANCEL'});
  }

  render() {
    return (
      <div id="AppComponent">
        <p>This is working better!</p>

        <p>This is awsm!</p>

        <button className="primary-btn" onClick={this.onSaveHandler}>Save</button>
        <button className="secondary-btn" onClick={this.onCancelHandler}>Cancel</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(AppComponent);


AppComponent.propTypes = {
  dispatch: React.PropTypes.func
};
