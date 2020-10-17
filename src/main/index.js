import React from 'react';
import { Layout, Menu, Popconfirm, message, Button } from 'antd';
import "./main.less"
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { NavLink, Redirect, Route, useHistory } from 'react-router-dom';
import Users from "../users/index"
import Goods from '../goods';
const { Sider } = Layout;
const { SubMenu } = Menu;


function Main() {
    const history = useHistory()
    const state = {
        collapsed: false,
    };
    const onCollapse = collapsed => {
        // console.log(collapsed);
        // this.setState({ collapsed });

    };
    const confirm = (e) => {
        // console.log(e);
        message.success('成功退出');

        localStorage.removeItem("user")
        history.push('/login')
    }

    const cancel = (e) => {
        console.log(e);
        message.error('停止退出');
    }

    return (
        <>

            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
                    <div className="logo" />

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {/* 左一 */}
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <NavLink to="/main/users">users</NavLink>
                        </Menu.Item>
                        {/* 左二 */}
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            <NavLink to="/main/goods">Option 2</NavLink>
                        </Menu.Item>
                        {/* 左三 */}
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        {/* 左四 */}
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        {/* 左五 */}
                        <Menu.Item key="9" icon={<FileOutlined />} />

                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Popconfirm
                        title="确定要退出吗?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="是"
                        cancelText="否"
                    >
                        <Button>退出登录</Button>
                    </Popconfirm>
                    {/* <Header className="site-layout-background" style={{ padding: 0 }} />

                    <Content style={{ margin: '0 16px' }}>

                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>

                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}></Footer> */}
                    <Redirect to="/main/users" />
                    <Route path="/main/users" component={Users} />
                    <Route path="/main/goods" component={Goods} />
                </Layout>

            </Layout>
        </>
    );

}
export default Main