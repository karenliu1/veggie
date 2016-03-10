import React from 'react'
import styles from './intro.less'
import wrapperStyles from './wrapper.less'

export default React.createClass({
    render() {
        return (
            <div className={ wrapperStyles.section }>
                <p className={ styles.title }>
                    The Environmental Impact of Meat Production
                </p>
                <div className={ styles.separator }>or</div>
                <p className={ styles.subtitle }>
                    Why Veggies are Super!
                </p>
            </div>
        )
    }
})
