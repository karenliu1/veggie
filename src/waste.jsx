import React from 'react'
import wrapperStyles from './wrapper.less'

export default React.createClass({
    render() {
        return (
            <div className={ wrapperStyles.section }>
                Animals raised for food produce ~130 times the amount of excrement as
                the entire human population.
            </div>
        )
    }
})
