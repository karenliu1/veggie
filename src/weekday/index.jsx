import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'
import crySvg from './cry_svg.jsx'

export default React.createClass({
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-6">
                        <div className={ styles.faceIconContainer }>
                            { crySvg }
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
                    Not necessarily. Graham Hill has a <a
                        href="https://www.ted.com/talks/graham_hill_weekday_vegetarian"
                        target="_blank">wonderful TED talk</a> about
                    making an incremental change. Altering some of your diet
                    still makes a difference.
                </p>
            </div>
        )
    }
})
