import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'
import poopSvg from './poop_svg.jsx'

export default React.createClass({
    render() {
        return (
            <div className="row middle-xs center-xs">
                <div className="text-container col-xs-12 col-sm-9">
                    Farm animals produce <strong>~130 times</strong> the amount
                    of excrement as all humans combined. Runoff pollutes
                    waterways and creates dead zones.
                </div>
                <div className="col-xs-12 col-sm-3">
                    <div className={ classnames("wow", styles.poopIcon) }>
                        { poopSvg }
                    </div>
                </div>
            </div>
        )
    }
})
