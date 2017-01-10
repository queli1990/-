import React,{ Component } from 'react'

import { connect } from 'react-redux'
import Setting from '../components/Setting'

class SettingContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Setting {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(SettingContainer)
