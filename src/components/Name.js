import React from 'react';
import styled from 'styled-components';
import { Formik, Field } from 'formik';

import {
   Form,
   Label,
   Text,
   Input,
   NextBtn,
   LabelInputPair,
} from './FormParts';

const NoScroll = styled.div`
  overflow: hidden;
  min-height: 100%
  padding: 10px;
`;

const valRequired = value => {
  let err;
  if (!value) {
    err = '必須です';
  }
  return err;
};

const valNum = value => {
  let err;
  if (isNaN(value)) {
    err = '数字のみ';
  }
  return err;
}


const Name = () => {
  return (
    <NoScroll>
      <Formik
        initialValues={{
          last_name: '',
          first_name: '',
          last_name_kana: '',
          first_name_kana: '',
          zip: '',
        }}
        onSubmit={values => {
          console.log('submit values:', values);
        }}
        render={({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form>
            <LabelInputPair>
              <Label>姓</Label>
              <Field
                name="last_name"
                validate={valRequired}
                render={({}) => (
                  <Input
                    type="text"
                    name="last_name"
                    value={values.last_name}
                    placeholder="大塚"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              />
              {errors.last_name && touched.last_name &&<Text color="red">{errors.last_name}</Text>}
            </LabelInputPair>

            <LabelInputPair>
              <Label>名</Label>
              <Field
                name="first_name"
                validate={valRequired}
                render={({}) => (
                  <Input
                    type="text"
                    name="first_name"
                    value={values.first_name}
                    placeholder="康平"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              />
              {errors.first_name && touched.first_name &&<Text color="red">{errors.first_name}</Text>}
            </LabelInputPair>

            <LabelInputPair>
              <Label>セイ</Label>
              <Field
                name="last_name_kana"
                render={({}) => (
                  <Input
                    type="text"
                    name="last_name_kana"
                    value={values.last_name_kana}
                    placeholder="オオツカ"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              />
            </LabelInputPair>

            <LabelInputPair>
              <Label>メイ</Label>
              <Field
                name="first_name_kana"
                render={({}) => (
                  <Input
                    type="text"
                    name="first_name_kana"
                    value={values.first_name_kana}
                    placeholder="オオツカ"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              />
            </LabelInputPair>

            <LabelInputPair>
              <Label>郵便番号</Label>
              <Field
                name="zip"
                validate={val => valRequired(val) || valNum(val)}
                render={({}) => (
                  <Input
                    type="text"
                    name="zip"
                    value={values.zip}
                    placeholder="1330061"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              />
              {errors.zip && touched.zip && <Text color="red">{errors.zip}</Text>}
            </LabelInputPair>
            <NextBtn type="submit">つぎへ</NextBtn>
          </Form>
        )}
      />
    </NoScroll>
  );
};

export default Name;
