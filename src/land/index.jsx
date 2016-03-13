import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'

const NUM_GRAIN = 16
const NUM_FISH = 5
const GRAIN_ROTATION_STEP = 360 / NUM_GRAIN
const FISH_ROTATION_STEP = 360 / NUM_FISH

export default React.createClass({
    getInitialState() {
        return {
            showGrain: false,
            showFish: false
        }
    },

    toggleGrain() {
        this.setState({ showGrain: !this.state.showGrain })
    },

    toggleFish() {
        this.setState({ showFish: !this.state.showFish })
    },

    render() {
        let grainIconEls = []
        for (let i = 0; i < NUM_GRAIN; i++) {
            let inlineStyle = {}
            const rotation = GRAIN_ROTATION_STEP * i
            if (this.state.showGrain) {
                // Rotate backwards, then forwards so orientation stays upright
                inlineStyle.transform = `rotate(${rotation}deg) translateY(-6rem) rotate(-${rotation}deg)`
            }

            grainIconEls.push(
                <img key={ `grain-${i}` }
                     src="images/grain.svg"
                     className={ classnames(
                         styles.surroundIcon,
                         this.state.showGrain && styles.isActive
                     )}
                     style={ inlineStyle } />
            )
        }

        let fishIconEls = []
        for (let i = 0; i < NUM_FISH; i++) {
            let inlineStyle = {}
            const rotation = FISH_ROTATION_STEP * i
            if (this.state.showFish) {
                // Rotate backwards, then forwards so orientation stays upright
                inlineStyle.transform = `rotate(${rotation}deg) translateY(-6rem) rotate(-${rotation}deg)`
            }

            fishIconEls.push(
                <img key={ `fish-${i}` }
                     src="images/fish.svg"
                     className={ classnames(
                         styles.surroundIcon,
                         this.state.showFish && styles.isActive
                     )}
                     style={ inlineStyle } />
            )
        }

        return (
            <div>
                It takes up to { NUM_GRAIN } pounds of grain to produce 1 pound
                of meat, and { NUM_FISH } pounds of wild-caught fish to produce
                1 pound of farmed fish.

                <div className="row middle-xs">
                    <div className={ classnames(
                        styles.iconContainer,
                        "col-xs-12 col-sm-6"
                    )}>
                        <div className={ classnames(
                            styles.centerIcon,
                            !this.state.showGrain && styles.showCaption
                        )}>
                            <img src="images/meat.svg"
                                 onClick={ this.toggleGrain } />
                        </div>
                        { grainIconEls }
                    </div>
                    <div className={ classnames(
                        styles.iconContainer,
                        "col-xs-12 col-sm-6"
                    )}>
                        <div className={ classnames(
                            styles.centerIcon,
                            !this.state.showFish && styles.showCaption
                        )}>
                            <img src="images/fish.svg"
                                 onClick={ this.toggleFish } />
                        </div>
                        { fishIconEls }
                    </div>
                </div>

                The land used for farm animals and animal feed uses 30% of
                Earth's land mass.
            </div>
        )
    }
})
