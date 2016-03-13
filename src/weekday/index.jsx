import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'
import crySvg from './cry_svg.jsx'

export default React.createClass({
    getInitialState() {
        return {
            isRelieved: false
        }
    },

    changeFace(e) {
        this.setState({ isRelieved: true })
        e.preventDefault()
    },

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-6">
                        <div className={ styles.faceIconContainer }>
                            { this.state.isRelieved ? (
                                <img src="images/relieved.svg"
                                     className={ classnames("icon", styles.relievedIcon) } />
                            ) : crySvg }
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <img src="images/burger.svg" className="icon" />
                    </div>
                </div>
                <p>
                    "So does this mean I have to give up burgers forever??"
                </p>
                <p>
                    <a href="#" onClick={ this.changeFace }>Not necessarily</a>.
                </p>
                <p>
                    Graham Hill has a <a
                        href="https://www.ted.com/talks/graham_hill_weekday_vegetarian"
                        target="_blank">wonderful TED talk</a> about
                    making an incremental change. Cutting back partway
                    still makes a difference.
                </p>
            </div>
        )
    }
})
