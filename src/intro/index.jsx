import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'
import wrapperStyles from '../wrapper.less'

export default React.createClass({
    hideMonkeyTimeout: null, // after 3s, remove the monkeyIsActive class

    getInitialState() {
        return { showMonkey: false }
    },

    showMonkey(e) {
        // If hideMonkeyTimeout is not null, the animation is still active
        if (this.hideMonkeyTimeout === null) {
            this.hideMonkeyTimeout = setTimeout(() => {
                this.hideMonkeyTimeout = null
                this.setState({ showMonkey: false })
            }, 2000)
            this.setState({ showMonkey: true })
        }
        e.preventDefault()
    },

    render() {
        const monkeyStyles = classnames(
            styles.monkey,
            this.state.showMonkey && styles.monkeyIsActive
        )
        return (
            <div className={ classnames(wrapperStyles.section, styles.section, 'wow') }>
                <img className={ monkeyStyles } src="images/monkey.svg" />
                <div className={ classnames(styles.intro, "row center-xs middle-xs") }>
                    <div className="col-xs-12 col-sm-3">
                        <img src="images/bear.svg" className={ styles.bear } />
                    </div>
                    <div className={ classnames(styles.text, "col-xs-12 col-sm-9") }>
                        This is Smucky the Bear. Smucky is not here to tell you how
                        to prevent forest fires. He <a href="#" onClick={ this.showMonkey }>
                            doesn't even care if you don't love animals
                        </a>. He is here to tell you why being a veggie-tarian is more
                        awesome than you might think.
                    </div>
                </div>
            </div>
        )
    }
})
