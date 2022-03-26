import style from './Body.module.css';
import { Input } from 'antd';
const { TextArea } = Input;

const Body = (props) => {
    const { styles } = props;
    const conversation = [{
        type: "user",
        message: "Hi",
        timeStamp: 10
    },
    {
        type: "bot",
        message: "Hello user",
        timeStamp: 9
    },
    {
        type: "user",
        message: "I need help with cancellation of job",
        timeStamp: 8
    }
    ]
    return (<div className={styles.body}>
        {conversation.map((message) => (
            <div className={message.type === "user" ? style.user : style.bot}>
                <TextArea
                    placeholder={message.message}
                    autoSize={{ minRows: 1 }}
                />
                <div className={style.space}/>
            </div>
        ))}
    </div>);
};

export default Body;