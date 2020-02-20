// @flow
import * as React from 'react';
import { h, Component } from 'preact';
import classNames from 'classnames';
import style from './style.css';
type Props = {
    children: ?React.Node,
    className: ?string,
    onClick: (?void) => void,
    onChange: File => void
};

const noop = () => {};

export default class CustomFileInput extends Component<Props> {
    static defaultProps: Props = {
        children: null,
        className: '',
        onClick: noop,
        onChange: noop
    };

    input: ?HTMLInputElement;

    handleClick = () => {
        if (this.input) {
            this.input.click();
        }
        this.props.onClick();
    };
    toBase64 = (file: any) => new Promise<any>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    handleChange = async (event: SyntheticEvent<HTMLInputElement>) => {
        if (this.input) {
            const data = await this.toBase64(this.input.files[0])
            this.props.onChange(data);
        }
        event.currentTarget.value = ''; // Allow re-uplading the same file
    };

    render = () => {
        const { children, className, onClick, onChange, ...other } = this.props; // eslint-disable-line no-unused-vars
        return (
            <span onClick={this.handleClick} className={classNames(style.container, className)}>
                {children}
                <input
                    type='file'
                    className={style.input}
                    ref={(ref) => (this.input = ref)}
                    onChange={this.handleChange}
                    {...other}
                />
            </span>
        );
    };
}
