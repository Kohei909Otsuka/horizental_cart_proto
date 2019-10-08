export const valRequired = value => {
  let err;
  if (!value) {
    err = '必須です';
  }
  return err;
};

export const valNum = value => {
  let err;
  if (isNaN(value)) {
    err = '数字のみ';
  }
  return err;
}

