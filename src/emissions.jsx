import React from 'react'
import classnames from 'classnames'
import styles from './emissions.less'
import wrapperStyles from './wrapper.less'
import carSvg from './emissions_car_svg.jsx'
import boatSvg from './emissions_boat_svg.jsx'

export default React.createClass({
    getInitialState() {
        return {
            showAnimals: false
        }
    },

    showAnimals(e) {
        this.setState({ showAnimals: true })
        e.preventDefault()
    },

    render() {
        const animalsEl = (
            <div className="row center-xs">
                <div className="col-xs-4">
                    <img className={ styles.chickenIcon } src="images/chicken.svg" />
                </div>
            </div>
        )

        const transportationClasses = classnames(
            this.state.showAnimals && styles.shrinkOut,
            "row bottom-xs"
        )

        return (
            <div className={ wrapperStyles.section }>
                The greenhouse gas emissions produced by animal farming <a
                    href="#" onClick={ this.showAnimals }>are more than the
                    emissions</a> from all cars, trucks, planes and
                ships <strong>combined</strong>.

                <div className={ transportationClasses }>
                    <div className="col-xs-4">
                        <img className={ styles.planeIcon } src="images/plane.svg" />
                    </div>
                    <div className="col-xs-4">
                        { carSvg }
                    </div>
                    <div className="col-xs-4">
                        { boatSvg }
                    </div>
                </div>

                { this.state.showAnimals && animalsEl }
            </div>
        )
    }
})
