import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from './redux'

const IceCreamContainer = (props) => {
    return (
        <>
            <h1>Number of IceCream - {props.numOfIceCream} </h1>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </>
    )
}
const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (IceCreamContainer)