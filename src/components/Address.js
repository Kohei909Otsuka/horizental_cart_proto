import React from 'react';
import { Formik, Field } from 'formik';
import { navigate } from 'hookrouter';
import { NoScroll } from './CommonStyle';
import { valRequired } from './Validate';

import {
   Form,
   Label,
   Text,
   Input,
   NextBtn,
   LabelInputPair,
} from './FormParts';

const Address = () => {
  return (
    <NoScroll>
      <Formik
        initialValues={{
          address: '',
          building: '',
        }}
        onSubmit={values => {
          console.log('submit values:', values);
          // find address by zip
          navigate('/address');
        }}
        render={({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <LabelInputPair>
              <Label>番地</Label>
              <Field
                name="address"
                validate={valRequired}
                render={() => (
                  <Input
                    type="text"
                    name="address"
                    value={values.address}
                    placeholder="1-1-1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              />
              {errors.address && touched.address &&<Text color="red">{errors.address}</Text>}
            </LabelInputPair>

            <LabelInputPair>
              <Label>建物名</Label>
              <Field
                name="building"
                render={() => (
                  <Input
                    type="text"
                    name="building"
                    value={values.building}
                    placeholder="東建インターナショナルビル"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
              />
            </LabelInputPair>

            <NextBtn type="submit">つぎへ</NextBtn>
          </Form>
        )}
      />
    </NoScroll>
  );
};

export default Address;
