import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'
import wrapperStyles from '../wrapper.less'
import poopSvg from './poop_svg.jsx'

export default React.createClass({
    render() {
        return (
            <div className={ classnames(wrapperStyles.section, styles.section) }>
                <div className={ classnames(styles.content, "row middle-xs") }>
                    <div className="col-xs-12 col-md-9">
                        Animals raised for food produce ~130 times the amount of
                        excrement as the entire human population. Runoff pollutes
                        waterways and creates dead zones.
                    </div>
                    <div className="col-xs-12 col-md-3">
                        { poopSvg }
                    </div>
                </div>
            </div>
        )
    }
})
