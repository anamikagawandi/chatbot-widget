import { useState } from 'react';
import {
    Input,
    Button
} from 'antd';
import { SendOutlined } from '@ant-design/icons';

const Footer = (props) => {
    const { styles, setMessage } = props;

    const [textInput, setTextInput] = useState("");

    const sendMessage = () => {
        if(textInput.length > 0) {
            setMessage({
                type: "user",
                message: textInput,
                timeStamp: new Date().getTime()
            });
            setTextInput("");
        }
    }

    return (<div className={styles.input}>
        <Input.Group compact>
            <Input value={textInput} style={{ width: 'calc(100% - 8%)' }} onChange={(e) => setTextInput(e.target.value)} onPressEnter={sendMessage}/>
            <Button disabled={textInput.length <= 0} type="primary" icon={<SendOutlined />} onClick={sendMessage} />
        </Input.Group>
    </div>);
};

export default Footer;