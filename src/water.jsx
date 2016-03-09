import React from 'react'
import styles from './water.less'

export default React.createClass({
    render() {
        return (
            <div className={ `section wow ${styles.waterSection}` }>
                <div className={ styles.wave1 }></div>
                <div className={ styles.wave2 }></div>
                <div className={ styles.wave3 }></div>
                <div className={ styles.waveBackground }></div>
                <p className={ styles.textContainer }>
                    It takes <strong>244</strong> gallons of water to produce a
                    pound of tofu, but <strong>2,400</strong> gallons to produce 1
                    pound of beef. So skimp on the beef, not on the showering!
                </p>
            </div>
        )
    }
})
