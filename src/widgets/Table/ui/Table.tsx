import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import styles from './Table.module.scss';
import { UserCard } from '../../../entities/User/ui/UserCard/UserCard';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { getUserData } from '../../../entities/User/model/selectors/getUserData/getUserData';
import { fetchUsers } from '../../../entities/User/model/services/fetchUsers/fetchUsers';
import { User } from '../../../entities/User/model/types/UserSchema';
import { USER_TOTAL_COUNT_PER_PAGE } from '../../../shared/common/common';
import { getUserIsLoading } from '../../../entities/User/model/selectors/getUserIsLoading/getUserIsLoading';
import { Loader } from '../../../shared/ui/Loader/Loader';

interface TableProps {
	className?: string;
}

export const Table = memo((props: TableProps) => {
	const { className } = props;

	const dispatch = useAppDispatch();
	const data = useSelector(getUserData);
	const isLoading = useSelector(getUserIsLoading);
	const tableRef = useRef<HTMLDivElement | null>(null);
	const [indexStart, setIndexStart] = useState(0);
	const [users, setUsers] = useState<User[]>([]);
	const [fetching, setFetching] = useState(true);

	useEffect(() => {
		if (fetching) {
			dispatch(fetchUsers({ indexStart }))
				.then(() => {
					setIndexStart((prevState) => prevState + USER_TOTAL_COUNT_PER_PAGE);
				})
				.finally(() => setFetching(false));
		}
	}, [dispatch, fetching, indexStart]);

	useEffect(() => {
		if (data) {
			setUsers((prevUsers) => [...prevUsers, ...data]);
		}
	}, [data]);

	const handleScroll = useCallback((e: any) => {
		const documentElement = e.target?.documentElement;
		if (documentElement.scrollHeight - (documentElement.scrollTop + window.innerHeight) < 100) {
			setFetching(true);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);

		// eslint-disable-next-line func-names
		return function () {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	return (
		<div className={classNames(styles.table, {}, [className])} ref={tableRef}>
			{users?.map((user, index) => (
				<UserCard
					key={index}
					name={user.name}
					time={user.time}
					speed={user.speed}
					color={user.color}
					index={index + 1}
				/>
			))}
			{isLoading && <Loader />}
		</div>
	);
});
