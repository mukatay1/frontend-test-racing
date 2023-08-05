import { memo } from 'react';

import classNames from 'classnames';

import styles from './Text.module.scss';

export enum ThemeText {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	THIRD = 'third',
}

interface TextProps {
	className?: string;
	theme?: ThemeText;
	text?: string;
}

export const Text = memo((props: TextProps) => {
	const { className, theme = ThemeText.PRIMARY, text } = props;

	return <p className={classNames(styles.text, {}, [className, styles[theme]])}>{text}</p>;
});
