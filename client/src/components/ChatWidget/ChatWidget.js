import config from '../../config';
import Body from './Body/Body';
import style from './ChatWidget.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const ChatWidget = () => {
    return(<>
    <Header title={config.title} styles={style}></Header>
    <Body styles={style}></Body>
    <Footer styles={style}></Footer>
    </>);
}

export default ChatWidget;
