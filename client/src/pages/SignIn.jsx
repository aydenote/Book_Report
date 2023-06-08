import React from 'react';
import SignInLayout from '../layout/Post.layout';
import MenuLayout from '../layout/Menu.layout';
import UserInfo from '../components/Form/UserInfo';

const SignIn = () => {
  return (
    <SignInLayout>
      <MenuLayout />
      <UserInfo>Login</UserInfo>
    </SignInLayout>
  );
};

export default SignIn;
