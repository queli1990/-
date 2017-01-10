import React,{Component} from 'react'

import { connect } from 'react-redux'
import Chat from '../components/Chat'

class ChatContainer extends Component {
  constructor(props) {
    super(props)
  }

  render (){
    return (
      <Chat {...this.props} />
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(ChatContainer);
