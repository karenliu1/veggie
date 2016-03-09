import React from 'react'

import EmissionsSlide from './emissions.jsx'
import LandSlide from './land.jsx'
import WasteSlide from './waste.jsx'
import WaterSlide from './water.jsx'

export default React.createClass({
    render() {
        return (
            <div>
                <LandSlide />
                <WasteSlide />
                <WaterSlide />
                <EmissionsSlide />
            </div>
        )
    }
})
