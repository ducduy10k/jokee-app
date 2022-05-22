import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Caption from './caption'
import Question from './question'

const Home = props => {
  return (
        <div style={{flexGrow:1}}>
        <Caption/>   
        <Question/>
    </div>
  )
}

Home.propTypes = {}

export default Home