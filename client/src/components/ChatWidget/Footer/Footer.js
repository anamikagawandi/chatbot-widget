import { useState } from 'react';
import {
    Input,
    Button
} from 'antd';
import { SendOutlined } from '@ant-design/icons';

const Footer = (props) => {
    const { styles, setMessage } = props;

    const [textInput, setTextInput] = useState("");

    const sendMessage = (event) => {
        setMessage({
            type: "user",
            message: textInput,
            timeStamp: new Date().getTime()
        });
        console.log(event);
    }

    return (<div className={styles.input}>
        <Input.Group compact>
            <Input style={{ width: 'calc(100% - 8%)' }} onChange={(e) => setTextInput(e.target.value)} onPressEnter={sendMessage}/>
            <Button type="primary" icon={<SendOutlined />} onClick={sendMessage} />
        </Input.Group>
    </div>);
};

export default Footer;