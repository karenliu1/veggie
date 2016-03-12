import React from 'react'
import classnames from 'classnames'
import styles from './water.less'
import wrapperStyles from './wrapper.less'

export default React.createClass({
    render() {
        return (
            <div className={ classnames(wrapperStyles.section, styles.waterSection) }>
                <div className="wow">
                    <div className={ styles.wave1 }></div>
                    <div className={ styles.wave2 }></div>
                    <div className={ styles.wave3 }></div>
                    <div className={ styles.waveBackground }></div>
                    <img src="images/cow.svg" className={ styles.cow } />
                </div>
                <div className={ styles.textContainer }>
                    It takes <strong>244</strong> gallons of water to produce a
                    pound of tofu, but <strong>2,400</strong> gallons to produce 1
                    pound of beef. Smucky encourages you to skimp on the beef,
                    not on the showering.
                </div>
            </div>
        )
    }
})
