import React from 'react';
import PostLayout from '../layout/Post.layout';
import MenuLayout from '../layout/Menu.layout';
import WriteLayout from '../layout/Write.layout';
import ReportEdit from '../components/form/ReportEdit';

const Edit = () => {
  return (
    <PostLayout>
      <MenuLayout />
      <WriteLayout>
        <ReportEdit />
      </WriteLayout>
    </PostLayout>
  );
};

export default Edit;
