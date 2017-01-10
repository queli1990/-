import React,{ Component } from 'react'

import { connect } from 'react-redux'
import MineHealth from '../components/MineHealth'

class SettingContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MineHealth {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(SettingContainer)


//类似于web页面
