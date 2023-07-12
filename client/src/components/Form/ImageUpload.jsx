import React from 'react';
import { styled } from 'styled-components';

const ImageUpload = props => {
  // 이미지 파일 업로드 시 blob 형식으로 state에 저장
  const changeImage = event => {
    if (props.setImageSrc) {
      const file = event.target.files[0];
      props.setImageSrc(URL.createObjectURL(file));
    }
    return;
  };

  return (
    <ImgWrap>
      <ImagePreview src={props.imageSrc} />
      <UploadWrap>
        <ButtonLabel>
          <InputFile id="image" type="file" accept="image/*" {...props.register('image', { onChange: changeImage })} />
        </ButtonLabel>
      </UploadWrap>
    </ImgWrap>
  );
};

export default ImageUpload;

const ImgWrap = styled.div`
  display: block;
  max-width: 300px;
  width: 100%;
  height: 300px;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: white;
  overflow: hidden;
`;

const ImagePreview = styled.img`
  position: relative;
  width: 100%;
  height: 225px;
  object-fit: contain;
`;

const UploadWrap = styled.div`
  position: relative;
  height: 75px;
  overflow: hidden;
  text-align: center;
  transition: background-color ease-in-out 150ms;
  background-color: cadetblue;
  cursor: pointer;
`;

const ButtonLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  &::after {
    content: 'ADD';
    font-size: 2.5rem;
    color: #e6e6e6;
  }
`;

const InputFile = styled.input`
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  overflow: hidden;
  opacity: 0;
  z-index: -1;
`;
