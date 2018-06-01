import React from 'react'
import {
    Menu,
    Icon
} from 'antd';
import {
    NavLink,
    withRouter
} from 'react-router-dom'
import './menu.styl'

const SubMenu = Menu.SubMenu;

class MenuDemo extends React.Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    render() {
        return (
            <div>
                {/*<Menu theme="light" mode="inline" defaultSelectedKeys={['/']} selectedKeys={[this.props.history.location.pathname]} onOpenChange={this.onOpenChange}>*/}
                <Menu theme="dark" mode="inline" openKeys={this.state.openKeys}
                      onOpenChange={this.onOpenChange}>
                    <SubMenu key="sub1" title={<span><Icon type="mail"/><span>antd 组件例子</span></span>}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span>button</span>
                            <NavLink to='/'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/input">
                            <Icon type="video-camera"/>
                            <span>input</span>
                            <NavLink to='/input'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/private_route">
                            <Icon type="video-camera"/>
                            <span>PrivateRoute</span>
                            <NavLink to='/private_route'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/table">
                            <Icon type="video-camera"/>
                            <span>table</span>
                            <NavLink to='/table'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/component">
                            <Icon type="video-camera"/>
                            <span>组件写法</span>
                            <NavLink to='/component'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/form_rule">
                            <Icon type="video-camera"/>
                            <span>表单form</span>
                            <NavLink to='/form_rule'></NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting"/><span>mobx 使用</span></span>}>
                        <Menu.Item key="/mobx_vm">
                            <Icon type="video-camera"/>
                            <span>mobx 双向绑定</span>
                            <NavLink to='/mobx_vm'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/mobx_computed">
                            <Icon type="video-camera"/>
                            <span>mobx的computed</span>
                            <NavLink to='/mobx_computed'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/mobx_router">
                            <Icon type="video-camera"/>
                            <span>mobx结合router</span>
                            <NavLink to='/mobx_router'></NavLink>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default withRouter(MenuDemo)
