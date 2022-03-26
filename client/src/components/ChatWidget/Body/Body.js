import style from './Body.module.css';
import { Input } from 'antd';
const { TextArea } = Input;

const Body = (props) => {
    const { styles, conversation } = props;

    console.log(conversation);

    return (<div className={styles.body}>
        {conversation.length > 0 && conversation.map((message) => (
            <div className={message.type === "user" ? style.user : style.bot}>
                <TextArea
                    placeholder={message.message}
                    autoSize={{ minRows: 1 }}
                    disabled={true}
                />
                <div className={style.space}/>
            </div>
        ))}
    </div>);
};

export default Body;