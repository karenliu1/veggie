import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'

export default React.createClass({
    render() {
        return (
            <div>
                <div className="row middle-xs center-xs">
                    <div className="col-xs-12 col-sm-3">
                        <img className="icon" src="images/rainbow.svg" />
                    </div>
                    <div className={ classnames(styles.textContainer, "col-xs-12 col-sm-9") }>
                        Being a veggie-tarian is great for more than just the
                        environment &mdash; a plant-based diet is great for
                        health, is easy on the purse, reduces the number of
                        animals raised in cruelty and confinement, and has the
                        potential to ease world hunger.
                    </div>
                </div>

                <div className="row middle-xs center-xs">
                    <div className={ classnames(styles.textContainer, "col-xs-12 col-sm-9") }>
                        Thanks for listening to this old bear ramble. He's
                        going to go snack on some berries now.
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <img className="icon" src="images/bear.svg" />
                    </div>
                </div>
            </div>
        )
    }
})
