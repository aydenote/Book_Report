import React from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaUserCircle, FaRegAddressCard, FaLock, FaPaperPlane } from 'react-icons/fa';
import { styled } from 'styled-components';

const UserInfo = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  const pathName = useLocation().pathname;

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
        <BtnWrap>
          <Submit type="submit">
            제출
            <SubmitIcon size={20} />
          </Submit>
        </BtnWrap>
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
`;

const BtnWrap = styled.div`
  text-align: center;
`;

const Submit = styled.button`
  display: flex;
  gap: 10px;
  margin: auto;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 2px;
  font-size: 18px;
  transition: 0.3s ease-out;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
  color: #fff;
  background-color: #26a69a;
  cursor: pointer;
  &:hover {
    background-color: #2bbbad;
  }
`;

const SubmitIcon = styled(FaPaperPlane)`
  color: #fff;
`;
