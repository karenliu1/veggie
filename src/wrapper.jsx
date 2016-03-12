import React from 'react'

import IntroSlide from './intro/index.jsx'
import EmissionsSlide from './emissions/index.jsx'
import LandSlide from './land/index.jsx'
import WasteSlide from './waste/index.jsx'
import WaterSlide from './water/index.jsx'
import WeekdaySlide from './weekday/index.jsx'
import OutroSlide from './outro/index.jsx'
import CreditsSlide from './credits/index.jsx'
import styles from './wrapper.less'

export default React.createClass({
    render() {
        return (
            <div>
                <div className={ styles.sectionWrapper }>
                    <IntroSlide />
                </div>
                <div className={ `${styles.sectionWrapper} ${styles.alternate}` }>
                    <LandSlide />
                </div>
                <div className={ styles.sectionWrapper }>
                    <WasteSlide />
                </div>
                <div className={ `${styles.sectionWrapper} ${styles.alternate}` }>
                    <WaterSlide />
                </div>
                <div className={ styles.sectionWrapper }>
                    <EmissionsSlide />
                </div>
                <div className={ `${styles.sectionWrapper} ${styles.alternate}` }>
                    <WeekdaySlide />
                </div>
                <div className={ styles.sectionWrapper }>
                    <OutroSlide />
                </div>
                <div className={ `${styles.sectionWrapper} ${styles.alternate}` }>
                    <CreditsSlide />
                </div>
            </div>
        )
    }
})
