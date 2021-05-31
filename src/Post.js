import React, {forwardRef} from 'react';
import './Post.css';
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

const Post = forwardRef(({ 
    displayName,
    userName,
    verified,
    text,
    image,
    avatar},ref)=>{
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar}  />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName} <span className="post__username">
                            {verified &&    <VerifiedUserIcon className="post__verifiedBadge" /> }@{userName} 
                            </span>
                        </h3>
                    </div>
                    <div className="post__tweets">
                        <p>{text}</p>
                    </div>
                </div>
                {image && <img src={image} alt=""/>}
                <div className="post__details">
                    <ModeCommentOutlinedIcon fontSize="Small"/>
                    <RepeatOutlinedIcon fontSize="Small"/>
                    <FavoriteBorderRoundedIcon fontSize="Small"/>
                    <PublishOutlinedIcon  fontSize="Small"/>

                    
                </div>
            </div>
        </div>
    )
})

export default Post
