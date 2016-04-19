import * as React from 'react';
import { connect } from 'react-redux';
import MapComponent from './MapComponent.jsx';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onParkHandler = this.onParkHandler.bind(this);
    this.onFindAutomobileHandler = this.onFindAutomobileHandler.bind(this);
  }

  onParkHandler() {
    this.props.dispatch({type: 'PARK_AUTOMOBILE'});
  }

  onFindAutomobileHandler() {
    this.props.dispatch({type: 'FIND_AUTOMOBILE'});
  }

  render() {
    return (
      <div>
        <p>It is working!</p>
        <button onClick={this.onParkHandler}>Park</button>
        <button onClick={this.onFindAutomobileHandler}>Find</button>
        <MapComponent />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(AppComponent);


AppComponent.propTypes = {
  dispatch: React.PropTypes.func,
};
