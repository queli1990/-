import React,{ Component } from 'react';
import { connect } from 'react-redux'
import Detail from '../components/Detail'

class DetailContainer extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Detail {...this.props} />
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(DetailContainer)
