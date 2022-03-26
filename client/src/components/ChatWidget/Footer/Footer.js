import {
    Input,
    Button
} from 'antd';
import { SendOutlined } from '@ant-design/icons';

const Footer = (props) => {
    const { styles } = props;

    return (<div className={styles.input}>
        <Input.Group compact>
            <Input style={{ width: 'calc(100% - 8%)' }} />
            <Button type="primary" icon={<SendOutlined />} />
        </Input.Group>
    </div>);
};

export default Footer;