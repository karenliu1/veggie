import React from 'react'
import classnames from 'classnames'
import wrapperStyles from './wrapper.less'
import styles from './land.less'

export default React.createClass({
    render() {
        return (
            <div className={ classnames('wow', 'animated', wrapperStyles.section) }>
                It takes up to 16 pounds of grain to produce 1 pound of meat, and 5
                pounds of wild-caught fish to produce 1 pound of farmed fish.

                <div className={ styles.fishTank }>
                    <div className={ styles.bigFish }>
                        <img src="images/fish.svg" />
                    </div>
                    <div className={ styles.littleFish }>
                        <img src="images/fish.svg" />
                        <img src="images/fish.svg" />
                        <img src="images/fish.svg" />
                        <img src="images/fish.svg" />
                        <img src="images/fish.svg" />
                    </div>
                </div>

                The land used for farm animals and animal feed uses 30% of
                Earth's land mass.
            </div>
        )
    }
})
