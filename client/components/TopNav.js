import {Menu} from 'antd'
import Link from 'next/link'
import {AppstoreOutlined, LoginOutlined, UserAddOutlined, YoutubeOutlined} from '@ant-design/icons'

const {Item} = Menu //menu.item

const TopNav = () => {
    return (
            <Menu mode='horizontal'>
                <Item icon={<AppstoreOutlined />}>
                    <Link href='/'>
                        <a>App</a>
                    </Link>
                </Item>
                <Item icon={<LoginOutlined />}>
                    <Link href='/login'>
                        <a>Login</a>
                    </Link>
                </Item>
                <Item icon={<UserAddOutlined />}>
                    <Link href='/register'>
                        <a>Register</a>
                    </Link>
                </Item>
                <Item icon={<YoutubeOutlined />}>
                    <Link href='/courseone'>
                        <a>Course One</a>
                    </Link>
                </Item>
            </Menu>
    )
}

export default TopNav