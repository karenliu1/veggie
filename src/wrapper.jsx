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
                <IntroSlide />
                <hr />
                <LandSlide />
                <hr />
                <WasteSlide />
                <hr />
                <WaterSlide />
                <hr />
                <EmissionsSlide />
            </div>
        )
    }
})
