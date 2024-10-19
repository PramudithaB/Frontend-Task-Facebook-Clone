import React from 'react';
import './Posts.css';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

const Post = ({ user, time, content, image }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={user.profilePic} alt={user.name} className="post-profile-pic" />
        <div className="post-user-details">
          <p>{user.name}</p>
          <span>{time}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
        {image && <img src={image} alt="Post Content" className="post-image" />}
      </div>
      <div className="like-btn">
      <FaThumbsUp className="icon" /> 1k

      </div>
      <div className="post-actions">
      <button className="post-action-btn like-btn">
        <FaThumbsUp className="icon" /> Like
      </button>
      <button className="post-action-btn comment-btn">
        <FaComment className="icon" /> Comment
      </button>
      <button className="post-action-btn share-btn">
        <FaShare className="icon" /> Share
      </button>
      </div>
    </div>
  );
};

const Posts = () => {
  const postData = [
    {
      user: { name: 'Softmint Software Solutions', profilePic: '/profile.jpeg' },
      time: '23 May',
      content: 'ඔබ සැමට පින්බර වෙසක් මංග්ල්‍යක් වේවා!',
      image: '/vesak.jpeg'
    },
    {
      user: { name: 'Softmint Software Solutions', profilePic: '/profile.jpeg' },
      time: '1 jan ',
      content: 'සුභ අලුත් අවුරුද්දක් වේවා!',
      image: '/newyear.jpeg'
    },
    {
      user: { name: 'Softmint Software Solutions', profilePic: '/profile.jpeg' },
      time: '1 jan ',
      content: 'We Are Hiring Intern Software Engineer Send your CV to careers@softmint.net',
      
      image: '/post1.jpeg'
    },
  ];

  return (
    <div className="posts-section">
      {postData.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Posts;
