import React, { ReactNode } from 'react';

// import Image from 'next/image';
// import eyeHideImage from '@/public/assets/icons/info-icons/eye-show.svg';
// import eyeImage from '@/public/assets/icons/info-icons/eye-hide.svg';

import styles from './styles.module.scss';

interface Props {
    placeholder?: string;
    children?: any;
    onChange?: any;
    value?: any;
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
      if (props.value && props.value !== state.value) {
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
            value: propsValue,
            error,
            touched,
            onBlur,
            onFocus,
            size,
            name,
            className,
            disabled,
            type,
        } = this.props;

        const { value, isHide } = this.state;
        const isError = error && touched;

        const isPassword = type === 'password';

        const currentValue = propsValue || value;

        return (
            <span className={ `${ styles.inputSimple } ${ className ? className : '' } ${ styles[`${ size }Width`] }` }>
                <input
                    type={ isHide ? 'password' : 'text' }
                    onChange={ this.inputOnChange }
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                    name={ name }
                    value={ currentValue }
                    className={ `${ styles.input } ${ isError ? styles.inputError : '' }` }
                    disabled={ disabled }
                />
                {
                  placeholder && (
                    <span className={ `${ styles.label } ${ currentValue ? styles.labelFilled : '' }` }>
                        { placeholder }
                    </span>
                  )
                }
                { isPassword && (
                    <button
                      type='button'
                      className={ `${styles.eye} ${isHide ? styles.eyeImage : styles.eyeHideImage}` }
                      onClick={ this.handleShowPassword }
                    >
                    </button>
                ) }

                { isError && <span className={ styles.inputErrorLabel }>
                    { error }
                </span> }
        </span>
        );
    }
}
