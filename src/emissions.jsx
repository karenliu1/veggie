import React from 'react'
import styles from './emissions.less'

export default React.createClass({
    render() {
        return (
            <div className="section wow">
                The greenhouse gasses produced by animal farming are more than the emissions from all cars, trucks, planes and ships *combined*
                <div className={ styles.carContainer }>
                    <img className={ styles.carBody } src="images/car.svg" />
                    <img className={ styles.carWheel1 } src="images/wheel.svg" />
                    <img className={ styles.carWheel2 } src="images/wheel.svg" />
                </div>
            </div>
        )
    }
})
