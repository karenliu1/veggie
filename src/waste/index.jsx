import React from 'react'
import styles from './styles.less'
import wrapperStyles from '../wrapper.less'

export default React.createClass({
    render() {
        return (
            <div className={ `${wrapperStyles.section} wow` }>
                Animals raised for food produce ~130 times the amount of excrement as
                the entire human population.
                <div className={ styles.chartRow }>
                    <img className={ styles.sourceIcon } src="images/pig.svg" />
                    <div className={ styles.animalPoopBar }></div>
                </div>
                <div className={ styles.chartRow }>
                    <img className={ styles.sourceIcon } src="images/people.svg" />
                    <div className={ styles.peoplePoopBar }></div>
                </div>
            </div>
        )
    }
})
