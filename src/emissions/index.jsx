import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'
import carSvg from './car_svg.jsx'
import boatSvg from './boat_svg.jsx'
import planeSvg from './plane_svg.jsx'

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
            styles.transportationContainer
        )

        return (
            <div>
                The greenhouse gas emissions produced by animal farming <a
                    href="#" onClick={ this.showAnimals }>are more than the
                    emissions</a> from all cars, trucks, planes and
                ships <strong>combined</strong>.

                <div className={ transportationClasses }>
                    <div className={ styles.planeIcon }>
                        { planeSvg }
                    </div>
                    <div className={ styles.carIcon }>
                        { carSvg }
                    </div>
                    <div className={ styles.boatIcon }>
                        { boatSvg }
                    </div>
                </div>

                { this.state.showAnimals && animalsEl }
            </div>
        )
    }
})
