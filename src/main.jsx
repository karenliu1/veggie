import React from 'react'

import IntroSlide from './intro/index.jsx'
import EmissionsSlide from './emissions/index.jsx'
import LandSlide from './land/index.jsx'
import WasteSlide from './waste/index.jsx'
import WaterSlide from './water/index.jsx'
import WeekdaySlide from './weekday/index.jsx'
import OutroSlide from './outro/index.jsx'
import CreditsSlide from './credits/index.jsx'
import Wrapper from './wrapper.jsx'

export default React.createClass({
    render() {
        return (
            <div>
                <Wrapper><IntroSlide /></Wrapper>
                <Wrapper isAlternate><LandSlide /></Wrapper>
                <Wrapper><WasteSlide /></Wrapper>
                <Wrapper isAlternate noPadding><WaterSlide /></Wrapper>
                <Wrapper><EmissionsSlide /></Wrapper>
                <Wrapper isAlternate><WeekdaySlide /></Wrapper>
                <Wrapper><OutroSlide /></Wrapper>
                <Wrapper isAlternate><CreditsSlide /></Wrapper>
            </div>
        )
    }
})
