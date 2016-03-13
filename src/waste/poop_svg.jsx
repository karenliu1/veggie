import React from 'react'
import classnames from 'classnames'
import styles from './styles.less'

export default (
    <svg className="icon" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="poop">
                <path d="M30.206,34.887 C13.146,34.887 0,27.789 0,43.728 C0,56.456 16.892,60 29.789,60 C44.773,60 60,56.456 60,43.728 C60,27.789 47.839,34.887 30.206,34.887 L30.206,34.887 Z" id="Shape" fill="#89664C"></path>
                <path d="M29.729,18.879 C20.176,18.879 5.227,19.995 5.227,31.5 C5.227,48.326 54.772,48.326 54.772,31.5 C54.772,19.995 39.884,18.879 29.732,18.879" id="Shape" fill="#9B7861"></path>
                <path d="M47.01,14.7 C42.352,4.36 20.643,15.006 24.372,2.474 C24.934,0.586 24.911,-0.239 23.476,0.06 C15.664,1.681 10.039,9.726 12.019,16.379 C18.395,37.812 53.299,28.652 47.01,14.7" id="Shape" fill="#A88673"></path>
                <path d="M26.847,32.32 C26.847,36.3 23.621,39.525 19.645,39.525 C15.666,39.525 12.44,36.3 12.44,32.32 C12.44,28.346 15.666,25.118 19.645,25.118 C23.621,25.118 26.847,28.347 26.847,32.32" id="Shape" fill="#FFFFFF"></path>
                <ellipse className={ styles.poopEyePath } id="Oval" fill="#000000" cx="17.604" cy="30.604" rx="3.603" ry="3.604"></ellipse>
                <path d="M47.562,32.32 C47.562,36.3 44.333,39.525 40.358,39.525 C36.378,39.525 33.155,36.3 33.155,32.32 C33.155,28.346 36.378,25.118 40.358,25.118 C44.333,25.118 47.562,28.347 47.562,32.32" id="Shape" fill="#FFFFFF"></path>
                <ellipse className={ styles.poopEyePath } id="Oval" fill="#000000" cx="38.37" cy="31.32" rx="3.603" ry="3.603"></ellipse>
                <ellipse className={ classnames(styles.poopMouthPath, "wow") } fill="#000000" cx="30" cy="47.63" rx="6" ry="6"></ellipse>
            </g>
        </g>
    </svg>
)
