import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'
import carSvg from './car_svg.jsx'
import boatSvg from './boat_svg.jsx'
import planeSvg from './plane_svg.jsx'

export default React.createClass({
    render() {
        return (
            <div>
                The greenhouse gas emissions produced by animal farming are
                more than the emissions from all cars, trucks, planes and
                ships <strong>combined</strong>.

                <div className="row center-xs bottom-xs">
                    <div className={ classnames("col-xs-12 col-sm-4", styles.planeIcon) }>
                        { planeSvg }
                    </div>
                    <div className={ classnames("col-xs-12 col-sm-4", styles.carIcon) }>
                        { carSvg }
                    </div>
                    <div className={ classnames("col-xs-12 col-sm-4", styles.boatIcon) }>
                        { boatSvg }
                    </div>
                </div>
            </div>
        )
    }
})
