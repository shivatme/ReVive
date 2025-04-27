import React from 'react';
import {useFormikContext} from 'formik';

import AppButton from '../AppButton';

interface SubmitButtonProps {
  title: string;
}

function SubmitButton({title}: SubmitButtonProps) {
  const {handleSubmit} = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
