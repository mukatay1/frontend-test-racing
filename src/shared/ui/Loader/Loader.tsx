import classNames from 'classnames';
import styles from './Loader.module.scss';

interface LoaderProps {
	className?: string;
}

export const Loader = (props: LoaderProps) => {
	const { className } = props;

	return <div className={classNames(styles.loader, {}, [className])}>...Loading</div>;
};
