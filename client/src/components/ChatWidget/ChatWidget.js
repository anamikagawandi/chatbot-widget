import { useEffect, useState } from 'react';
import config from '../../config';
import Body from './Body/Body';
import style from './ChatWidget.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const ChatWidget = () => {

    const [conversation, setConversation] = useState([]);
    const [message, setMessage] = useState();

    useEffect(() => {
        if(message) {
            setConversation([...conversation, message]);
        }
    }, [message]);

    return (<>
        <Header title={config.title} styles={style}></Header>
        <Body styles={style} conversation={conversation}></Body>
        <Footer styles={style} setMessage={setMessage}></Footer>
    </>);
}

export default ChatWidget;
