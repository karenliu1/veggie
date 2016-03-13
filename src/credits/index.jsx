import React from 'react'
import classnames from 'classnames'
import wrapperStyles from '../wrapper.less'

const FACT_URL = "http://www.onegreenplanet.org/animalsandnature/facts-on-animal-farming-and-the-environment/"
const EMOJI_URL = "http://emojione.com/"

export default React.createClass({
    render() {
        return (
            <div className={ wrapperStyles.section }>
                <div className="row middle-xs">
                    <div className="col-xs-12 col-sm-9">
                        Images sourced and edited from the beautiful gallery at <a
                            href={ EMOJI_URL }>EmojiOne</a>
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <a href={ EMOJI_URL }>
                            <img className="icon" src="images/croc.svg" />
                        </a>
                    </div>
                </div>
                <div className="row middle-xs">
                    <div className="col-xs-12 col-sm-3">
                        <a href={ FACT_URL }>
                            <img className="icon" src="images/plant.svg" />
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-9">
                        Factoids nabbed from <a
                            href={ FACT_URL }>One Green Planet</a>
                    </div>
                </div>
            </div>
        )
    }
})
