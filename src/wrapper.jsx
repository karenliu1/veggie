import React from 'react'
import classnames from 'classnames'
import styles from './wrapper.less'

export default React.createClass({
    propTypes: {
        isAlternate: React.PropTypes.bool,
        noPadding: React.PropTypes.bool,
        children: React.PropTypes.node
    },

    render() {
        return (
            <div className={ classnames(
                styles.sectionWrapper,
                this.props.isAlternate && styles.alternate
            )}>
            <div className={ classnames(
                styles.section,
                this.props.noPadding && styles.noPadding
            )}>
                    { React.cloneElement(this.props.children, {
                        className: styles.content
                    })}
                </div>
            </div>
        )
    }
})
