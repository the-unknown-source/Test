import React from 'react';
import "./SideNavbar.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import SideNavButton from './SideNavButton'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';

function SideNavbar() {
    return (
        <div className="sideNavbar">
            <TwitterIcon className="sideNavbar_twitterIcon" />

            <SideNavButton active text="Home" Icon={HomeIcon} />
            <SideNavButton text="Explore" Icon={ExploreIcon} />
            <SideNavButton text="Notifications" Icon={NotificationsNoneIcon} />
            <SideNavButton text="Messages" Icon={MailOutlineIcon} />
            <SideNavButton text="Bookmarks" Icon={BookmarkBorderIcon} />
            <SideNavButton text="Lists" Icon={ListAltIcon} />
            <SideNavButton text="Profile" Icon={PersonIcon} />
            <SideNavButton text="More" Icon={MoreHorizIcon} />

            <Button className="navTweet" variant="outlined" fullWidth>Tweet</Button>
    
        </div>
    )
}

export default SideNavbar
