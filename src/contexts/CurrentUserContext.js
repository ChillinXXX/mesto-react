import avatar from '../images/image-avatar.jpg';
import React from 'react';

export const CurrentUserContext = React.createContext();

export const defaultUser = {
  about: 'О себе',
  avatar: avatar,
  cohort: "cohort-xx",
  name: 'Имя пользователя',
  _id: 'd2899cd20c97dd49a526023b',
};
