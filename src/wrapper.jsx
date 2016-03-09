import React from 'react'

import IntroSlide from './intro.jsx'
import EmissionsSlide from './emissions.jsx'
import LandSlide from './land.jsx'
import WasteSlide from './waste.jsx'
import WaterSlide from './water.jsx'

export default React.createClass({
    render() {
        return (
            <div>
                <div className="section-wrapper"><IntroSlide /></div>
                <div className="section-wrapper is-alternate"><LandSlide /></div>
                <div className="section-wrapper"><WasteSlide /></div>
                <div className="section-wrapper is-alternate"><WaterSlide /></div>
                <div className="section-wrapper"><EmissionsSlide /></div>
            </div>
        )
    }
})
