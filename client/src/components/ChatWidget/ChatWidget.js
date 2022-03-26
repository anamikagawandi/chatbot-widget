import config from '../../config';
import Body from './Body/Body';
import style from './ChatWidget.module.css';
import Header from './Header/Header';
import Input from './Input/Input';

const ChatWidget = () => {
    return(<>
    <Header title={config.title} styles={style}></Header>
    <Body styles={style}></Body>
    <Input styles={style}></Input>
    </>);
}

export default ChatWidget;
