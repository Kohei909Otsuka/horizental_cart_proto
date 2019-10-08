import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
`;

export const Text = styled.span`
  color: ${props => props.color || 'black'};
`;

export const Input = styled.input`
  border-radius: 3px;
  height: 30px;
`;

export const NextBtn = styled.button`
  border-radius: 3px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #b8e6e1;
`;

export const LabelInputPair = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

