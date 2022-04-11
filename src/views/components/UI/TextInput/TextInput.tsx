import './TextInputStyle.scss';
import React, { Fragment } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label, Input, Popup, Icon } from 'semantic-ui-react';
interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {}

const TextInput: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  disabled = false,
  readOnly = false,
  labelName,
  labelPosition,
  labeled,
  labelColor = 'black',
  values,
  onChange,
  toolTipPosition,
  toolTipContents,
  mandatory = true,
  meta: { touched, error },
  icon,
  iconPosition,
  inlineLabel = false,
  pointing = 'above',
  defaultValue,
  onKeyPress,
}) => {
  const inputElement = (
    <Fragment>
      <div>
        <label>
          {labelName}{' '}
          <label hidden={mandatory} style={{ color: 'red' }} className="mandatory">
            {' '}
            *
          </label>
        </label>
        {toolTipContents && (
          <Popup
            trigger={<Icon name="info" color="grey" size="small" circular />}
            hoverable
            wide="very"
            position={toolTipPosition}
            content={
              <div className="ContainerMax200">
                <div>{toolTipContents}</div>
              </div>
            }
          />
        )}
      </div>

      <Input
        className="BlueLabel"
        {...input}
        placeholder={placeholder}
        disabled={disabled}
        label={labeled}
        labelPosition={labelPosition}
        style={{ minWidth: '5em' }}
        onChange={(e, data) => {
          input.onChange(data.value);
          if (onChange) {
            onChange(data.value);
          }
        }}
        onKeyPress={onKeyPress}
        readOnly={readOnly}
        icon={icon}
        iconPosition={iconPosition}
        value={values || input.value}
        defaultValue={defaultValue}
      />
      {touched && error && (
        <Label pointing={pointing} basic color="red">
          {error}
        </Label>
      )}
    </Fragment>
  );

  return (
    <Form.Field className="LabelNameLabel" error={touched && !!error} type={type} width={width}>
      {inlineLabel && <Form.Group inline>{inputElement}</Form.Group>}
      {!inlineLabel && inputElement}
    </Form.Field>
  );
};

export default TextInput;
