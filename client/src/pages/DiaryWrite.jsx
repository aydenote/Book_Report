import React from 'react';
import PostLayout from '../layout/Post.layout';
import MenuLayout from '../layout/Menu.layout';
import WriteLayout from '../layout/Write.layout';
import DiaryInfo from '../components/form/DiaryInfo';

const DiaryWrite = () => {
  return (
    <PostLayout>
      <MenuLayout />
      <WriteLayout>
        <DiaryInfo />
      </WriteLayout>
    </PostLayout>
  );
};

export default DiaryWrite;
