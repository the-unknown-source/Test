import React from 'react'
import { TwitterTimelineEmbed,TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed';
import './Widgets.css';
import SearchICon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchICon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>  

            <div className="widgets__widgetContainer">  
                <h2>What's Happening?</h2>
                
                <TwitterTweetEmbed tweetId={""}/>
                <TwitterTimelineEmbed
                    sourceType=""
                    screenName=""
                    options={{height:400} }/>
                <TwitterShareButton />
            </div>
        </div>
    )
}

export default Widgets
