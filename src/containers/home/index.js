import React, { Component } from 'react'
import HomeModel from '../../components/home'
import { connect } from 'react-redux'

class Home extends Component{
    render(){
        console.log(this.props.home)
        return(
            <HomeModel />
        )
    }
}


const mapStateToProps = state =>({
    home: state.home
})

export default connect(mapStateToProps)(Home)
