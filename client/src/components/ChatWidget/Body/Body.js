import React, { useEffect, useRef, useState } from 'react';
import style from './Body.module.css';
import { Input } from 'antd';
const { TextArea } = Input;

const Body = (props) => {
    const { styles, message } = props;

    const [conversation, setConversation] = useState([]);

    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (message) {
            setConversation([...conversation, message]);
        }
    }, [message]);

    useEffect(() => {
        scrollToBottom();
    }, [conversation]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (<div className={styles.body}>
        {conversation.length > 0 && conversation.map((message) => (
            <div key={message.timeStamp} className={message.type === "user" ? style.user : style.bot} ref={messagesEndRef}>
                <TextArea
                    className="message"
                    value={message.message}
                    autoSize={{ minRows: 1 }}
                    disabled={true}
                />
                <div className={style.space} />
            </div>
        ))}

    </div>);
};

export default Body;