import React,{Component} from 'react'

import { connect } from 'react-redux'
import Health from '../components/Health'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render (){
    return (
      <Health {...this.props} />
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(HomeContainer);
