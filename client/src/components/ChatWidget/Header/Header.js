const Header = (props) => {
    const { title, styles } = props;
    return (<div className={styles.header}>{title}</div>);
};

export default Header;