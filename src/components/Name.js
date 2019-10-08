import React from 'react';
import styled from 'styled-components';

import {
   Form,
   Label,
   Input,
   NextBtn,
   LabelInputPair,
} from './FormParts';

const NoScroll = styled.div`
  overflow: hidden;
  min-height: 100%
  padding: 10px;
`;

const Name = () => {
  return (
    <NoScroll>
      <Form>
        <LabelInputPair>
          <Label>姓</Label>
          <Input
            type="text"
            name="last_name"
          />
        </LabelInputPair>
        <LabelInputPair>
          <Label>名</Label>
          <Input
            type="text"
            name="first_name"
          />
        </LabelInputPair>

        <LabelInputPair>
          <Label>セイ</Label>
          <Input
            type="text"
            name="last_name_kana"
          />
        </LabelInputPair>
        <LabelInputPair>
          <Label>メイ</Label>
          <Input
            type="text"
            name="first_name_kana"
          />
        </LabelInputPair>

        <LabelInputPair>
          <Label>郵便番号</Label>
          <Input
            type="text"
            name="zip"
          />
        </LabelInputPair>

        <NextBtn type="submit">つぎへ</NextBtn>
      </Form>
    </NoScroll>
  );
};

export default Name;
