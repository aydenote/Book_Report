import React from 'react';
import ReportLayout from '../layout/Post.layout';
import MenuLayout from '../layout/Menu.layout';
import DiaryLayout from '../layout/Diary.layout';

const Diary = () => {
  return (
    <ReportLayout>
      <MenuLayout />
      <DiaryLayout />
    </ReportLayout>
  );
};

export default Diary;
