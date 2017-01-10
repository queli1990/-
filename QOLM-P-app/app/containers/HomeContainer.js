import React,{Component} from 'react'

import { connect } from 'react-redux'
import Home from '../components/Home'

class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render (){
    return (
      <Home {...this.props} />
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(HomeContainer);
