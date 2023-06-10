import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { handleLogin, handleSignup } from '../../apis/user';
import SignUp from '../button/SignUp';
import SignIn from '../button/SignIn';
import { FaUserCircle, FaRegAddressCard, FaLock } from 'react-icons/fa';
import { styled } from 'styled-components';

const UserInfo = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

  /** 로그인, 회원가입 API 호출 함수 */
  const onSubmit = async data => {
    const { name, id, password } = data;
    if (pathName !== '/signin') {
      const result = await handleSignup(name, id, password);
      handleSignupRes(result);
    } else {
      const result = await handleLogin(id, password);
      handleLoginRes(result);
    }
  };

  /** 회원가입 성공 여부에 따라 에러 출력 및 페이지 이동 함수*/
  const handleSignupRes = result => {
    if (!result.success) {
      setError('signupErr', {
        type: 'custom',
        message: '이미 가입된 ID 입니다.',
      });
    } else {
      navigate('/signin');
    }
  };

  /** 로그인 성공 여부에 따라 에러 출력 및 페이지 이동 함수 */
  const handleLoginRes = result => {
    if (!result.success) {
      setError('loginErr', {
        type: 'custom',
        message: `${result.msg}`,
      });
    } else {
      navigate('/');
    }
  };

  return (
    <Container>
      <Title>{children}</Title>
      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        {pathName !== '/signin' ? (
          <InputWrap>
            <NameIcon size={'2rem'} />
            <InputField id="name" placeholder="Name" {...register('name')} />
          </InputWrap>
        ) : null}
        <InputWrap>
          <IdIcon size={'2rem'} />
          <InputField
            id="id"
            type="text"
            placeholder="Personal ID"
            defaultValue={'test'}
            {...register('id', { required: true })}
          />
        </InputWrap>
        <InputWrap>
          <PwIcon size={'2rem'} />
          <InputField
            id="pw"
            type="password"
            placeholder="Password"
            defaultValue={'test'}
            {...register('password', { required: true })}
          />
        </InputWrap>
        {errors.id && <ErrText>ID를 입력해주세요.</ErrText>}
        {errors.password && <ErrText>Password를 입력해주세요.</ErrText>}
        {errors.signupErr && <ErrText>{errors.signupErr.message}</ErrText>}
        {errors.loginErr && <ErrText>{errors.loginErr.message}</ErrText>}
        {pathName !== '/signin' ? <SignUp /> : <SignIn />}
      </SignInForm>
    </Container>
  );
};

export default UserInfo;

const Container = styled.section`
  max-width: 420px;
  margin: auto;
  padding: 20px;
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.87);
`;

const Title = styled.h1`
  font-size: 2.92rem;
  line-height: 110%;
  text-align: center;
  margin: 1.46rem 0 2.168rem 0;
`;

const SignInForm = styled.form`
  font-size: 14px;
`;

const InputWrap = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const NameIcon = styled(FaUserCircle)`
  font-size: 2rem;
  transition: color 0.2s;

  ${InputWrap}:focus-within & {
    color: #26a69a;
  }
`;

const IdIcon = styled(FaRegAddressCard)`
  font-size: 2rem;
  transition: color 0.2s;

  ${InputWrap}:focus-within & {
    color: #26a69a;
  }
`;

const PwIcon = styled(FaLock)`
  font-size: 2rem;
  transition: color 0.2s;

  ${InputWrap}:focus-within & {
    color: #26a69a;
  }
`;

const InputField = styled.input`
  width: 86%;
  margin-left: 1rem;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  transition: all 0.3s;

  &:focus {
    border-bottom: 1px solid #26a69a;
  }

  &::placeholder {
    font-family: 'Roboto', sans-serif;
  }
`;

const ErrText = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: red;
`;
