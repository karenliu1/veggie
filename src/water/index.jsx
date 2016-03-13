import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'
import wrapperStyles from '../wrapper.less'

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
                    It takes <strong>over 4,000</strong> gallons of water to
                    produce a day's worth of food for a meat-eater, compared to
                    300 gallons of water to feed a vegan. Smucky encourages you
                    to skimp on the beef, not on the showering.
                </div>
            </div>
        )
    }
})
