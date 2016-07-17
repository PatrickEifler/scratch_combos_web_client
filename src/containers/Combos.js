import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCombosIfNeeded } from '../actions/combos';

class Combos extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    //dispatch(fetchcombosIfNeeded());
  }

  checkForcombos() {
    console.log('combos container props', this.props.combos.items[0]);
  }

  render() {
      return (
        <div>
          Implement combos Page
        </div>
      );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(mapStateToProps)(Combos);
