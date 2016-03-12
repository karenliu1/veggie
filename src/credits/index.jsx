import React from 'react'
import classnames from 'classnames'
import wrapperStyles from '../wrapper.less'

export default React.createClass({
    render() {
        return (
            <div className={ wrapperStyles.section }>
                <p>
                    All the images are from the gallery at EmojiOne:
                    <a href="http://emojione.com/" target="_blank">EmojiOne</a>
                </p>
                <p>
                    Factoids nabbed from <a href="http://www.onegreenplanet.org/animalsandnature/facts-on-animal-farming-and-the-environment/" target="_blank">One Green Planet</a>
                </p>
            </div>
        )
    }
})
