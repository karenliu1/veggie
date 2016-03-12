import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'
import wrapperStyles from '../wrapper.less'
import poopSvg from './poop_svg.jsx'
import poopShockedSvg from './poop_shocked_svg.jsx'

export default React.createClass({
    render() {
        return (
            <div className={ wrapperStyles.section }>
                Animals raised for food produce ~130 times the amount of
                excrement as the entire human population. Runoff pollutes
                waterways and creates dead zones.

                <div className={ classnames(styles.images, "row center-xs bottom-xs") }>
                    <div className="col-xs-2">
                        <img src="images/pig.svg" />
                    </div>
                    <div className="col-xs-6">
                        { poopSvg }
                    </div>
                    <div className="col-xs-2">
                        { poopShockedSvg }
                    </div>
                    <div className="col-xs-2">
                        <img src="images/sweat.svg" />
                    </div>
                </div>
            </div>
        )
    }
})
