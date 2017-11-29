import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'

const BlackBox = styled.div`
    height: 25%;
    width: 100%;
    background: #000;
    transform-origin: ${(props) => props.xDirection} center;
`

const BlackBoxAnimated = ({ reverseDirection = false }) => {
    return (
        <Motion
            defaultStyle={{ scaleX: 1 }}
            style={{ scaleX: spring(0) }}
        >
            {(style) => (
                < BlackBox
                    xDirection={reverseDirection ? 'left' : 'right'}
                    style={{
                        transform: `scaleX(${style.scaleX})`
                    }}
                />
            )}
        </Motion>
    )
}

BlackBoxAnimated.proptypes = {
    reverseDirection: PropTypes.bool,
}

export default BlackBoxAnimated
