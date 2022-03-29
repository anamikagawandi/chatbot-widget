import { useState, useEffect } from 'react';
import {
    Input,
    Button
} from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import config from '../../../config';

const client = new W3CWebSocket(config.wsURL);

const Footer = (props) => {
    const { styles, setMessage } = props;

    const [textInput, setTextInput] = useState('');

    const sendMessage = () => {
        if(textInput.length > 0) {
            setMessage({
                type: 'user',
                message: textInput,
                timeStamp: new Date().getTime()
            });
            setTextInput('');
        }
        client.send(textInput);
    }

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
            client.send('Hi');
          };
          client.onmessage = (message) => {
            const reply = JSON.parse(message.data).message;
            console.log(reply);
            setMessage({
                type: 'bot',
                message: reply,
                timeStamp: new Date().getTime()
            });
          };
    }, []);

    return (<div className={styles.input}>
        <Input.Group compact>
            <Input value={textInput} style={{ width: 'calc(100% - 8%)' }} onChange={(e) => setTextInput(e.target.value)} onPressEnter={sendMessage}/>
            <Button disabled={textInput.length <= 0} type='primary' icon={<SendOutlined />} onClick={sendMessage} />
        </Input.Group>
    </div>);
};

export default Footer;