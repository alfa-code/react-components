import React, { ReactNode } from 'react';
import classNames from 'classnames';

// import Image from 'next/image';
// import eyeHideImage from '@/public/assets/icons/info-icons/eye-show.svg';
// import eyeImage from '@/public/assets/icons/info-icons/eye-hide.svg';

import styles from './styles.module.scss';

interface Props {
  placeholder?: string;
  children?: any;
  onChange?: any;
  value?: string;
  touched?: boolean;
  error?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  className?: string;
  name?: string;
  size?: string;
  disabled?: boolean;
  type: 'password' | 'text';
}

interface State {
  value: string;
  isHide: boolean;
}

export class InputSimple extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: props.value || '',
      isHide: (props.type === 'password') ? true : false
    };
  }

  inputOnChange = (event: any) => {
    const { onChange } = this.props;
    const { value } = event.target;
    console.log('value:', value);

    if (onChange) {
      onChange(event)
    }

    this.setState({ value });
  };

  handleShowPassword = () => {
    const { isHide } = this.state;

    this.setState({
      isHide: !isHide
    });
  };

  static getDerivedStateFromProps = (props: Props, state: State) => {
    if (typeof props.value === 'string' && props.value !== state.value) {
      return {
        ...state,
        value: props.value,
      }
    }

    return null;
  }

  render(): ReactNode {
    const {
      placeholder,
      error,
      touched,
      onBlur,
      onFocus,
      name,
      className,
      disabled,
      type,
    } = this.props;

    const { value, isHide } = this.state;
    console.log('value!!!!:', value);
    const isError = error && touched;

    const isPassword = type === 'password';

    return (
      <span className={
        classNames(styles.inputSimple, {
          className: className,
        })
      }>
        <input
          type={isHide ? 'password' : 'text'}
          onChange={this.inputOnChange}
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
          value={ value }
          className={
            classNames({
              [styles.input]: true,
              [styles.inputError]: isError,
            })
          }
          disabled={disabled}
        />
        {
          placeholder && (
            <span className={
              classNames(styles.label, {
                [styles.labelFilled]: value,
              })
            }>
              {placeholder}
            </span>
          )
        }
        {isPassword && (
          <button
            type='button'
            className={
              classNames({
                [styles.eye]: true,
                [styles.eyeImage]: isHide,
                [styles.eyeHideImage]: !isHide,
              })
            }
            onClick={this.handleShowPassword}
          >
          </button>
        )}

        {isError && <span className={ styles.inputErrorLabel }>
          {error}
        </span>}
      </span>
    );
  }
}
