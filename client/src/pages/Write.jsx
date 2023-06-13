import React from 'react';
import PostLayout from '../layout/Post.layout';
import MenuLayout from '../layout/Menu.layout';
import WriteLayout from '../layout/Write.layout';
import ReportInfo from '../components/form/ReportInfo';

const Write = () => {
  return (
    <PostLayout>
      <MenuLayout />
      <WriteLayout>
        <ReportInfo />
      </WriteLayout>
    </PostLayout>
  );
};

export default Write;
