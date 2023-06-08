import React from 'react';
import SignInLayout from '../layout/Post.layout';
import MenuLayout from '../layout/Menu.layout';
import UserInfo from '../components/form/UserInfo';

const SignUp = () => {
  return (
    <SignInLayout>
      <MenuLayout />
      <UserInfo>Registration</UserInfo>
    </SignInLayout>
  );
};

export default SignUp;
