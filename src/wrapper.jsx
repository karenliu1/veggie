import React from 'react'

import IntroSlide from './intro.jsx'
import EmissionsSlide from './emissions.jsx'
import LandSlide from './land.jsx'
import WasteSlide from './waste.jsx'
import WaterSlide from './water.jsx'
import WeekdaySlide from './weekday.jsx'
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
            </div>
        )
    }
})
