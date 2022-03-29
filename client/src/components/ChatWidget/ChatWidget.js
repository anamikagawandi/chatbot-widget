import { useState } from 'react';
import config from '../../config';
import Body from './Body/Body';
import style from './ChatWidget.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const ChatWidget = () => {

    const [message, setMessage] = useState();

    return (<>
        <Header title={config.title} styles={style}></Header>
        <Body styles={style} message={message}></Body>
        <Footer styles={style} setMessage={setMessage}></Footer>
    </>);
}

export default ChatWidget;
