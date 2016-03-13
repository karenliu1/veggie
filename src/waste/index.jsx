import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'
import poopSvg from './poop_svg.jsx'

export default React.createClass({
    render() {
        return (
            <div className="row middle-xs center-xs">
                <div className="text-container col-xs-12 col-md-9">
                    Farm animals produce ~130 times the amount of
                    excrement as the entire human population. Runoff pollutes
                    waterways and creates dead zones.
                </div>
                <div className="col-xs-12 col-md-3">
                    { poopSvg }
                </div>
            </div>
        )
    }
})
