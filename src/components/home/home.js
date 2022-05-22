import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Caption from './caption'
import Question from './question'

const Home = props => {
  return (
    <Fragment>
        <Caption/>   
        <Question/>
    </Fragment>
  )
}

Home.propTypes = {}

export default Home