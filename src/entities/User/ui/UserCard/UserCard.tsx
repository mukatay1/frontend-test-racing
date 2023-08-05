import { memo, useCallback, useState } from 'react';

import classNames from 'classnames';

import styles from './UserCard.module.scss';
import { Text } from '../../../../shared/ui/Text';
import { ThemeText } from '../../../../shared/ui/Text/Text';
import { CustomSVG } from '../../../../shared/ui/CustomSvg';
import { Color } from '../../model/types/UserSchema';
import { Mods } from '../../../../shared/common/common';

interface UserCardProps {
	className?: string;
	name?: string;
	time?: number;
	speed?: number;
	color?: Color;
	index?: number;
}

export const UserCard = memo((props: UserCardProps) => {
	const { className, name, time, speed, color, index } = props;

	const timeString = time?.toString();
	const speedString = `${speed?.toString()} км/ч`;

	const [isFocused, setFocused] = useState(false);

	const handleFocus = useCallback(() => {
		setFocused(true);
	}, []);

	const handleBlur = useCallback(() => {
		setFocused(false);
	}, []);

	const mods: Mods = {
		[styles.focused]: isFocused,
	};

	return (
		<div
			className={classNames(styles.userCard, mods, [className])}
			onFocus={handleFocus}
			onBlur={handleBlur}
			tabIndex={0}
		>
			{index && <div className={styles.index}>{index}</div>}
			<div className={styles.card}>
				<CustomSVG className={styles.userAvatar} fillColor={color} />
				<div className={styles.cardData}>
					<Text theme={ThemeText.PRIMARY} text={name} />
					<div className={styles.speedData}>
						<Text theme={ThemeText.THIRD} text={timeString} className={styles.firstText} />
						<Text theme={ThemeText.SECONDARY} text="|" /> &nbsp;
						<Text theme={ThemeText.SECONDARY} text={speedString} />
					</div>
				</div>
			</div>
		</div>
	);
});
