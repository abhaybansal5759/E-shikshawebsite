import React from 'react';
import { Avatar } from '@nextui-org/react';

function MentorAvatar({ name }) {

  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const avatarSrc = `https://via.placeholder.com/150/${randomColor}/FFFFFF?text=${name.charAt(0)}`;
  
  return (
    <Avatar src={avatarSrc} />
  );
}

export default MentorAvatar;
