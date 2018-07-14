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
    state = {
        openKeys: ['sub2'],
    };
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

    componentDidMount() {
    }

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
                <Menu theme="dark" mode="inline" openKeys={this.state.openKeys}
                      onOpenChange={this.onOpenChange} defaultSelectedKeys={['/']}
                      selectedKeys={[this.props.history.location.pathname]}>
                    {/*<Menu theme="dark" mode="inline" openKeys={this.state.openKeys}*/}
                    {/*onOpenChange={this.onOpenChange}  defaultSelectedKeys={['/']} selectedKeys={[this.props.history.location.pathname]}>*/}
                    <SubMenu key="sub1" title={<span><Icon type="mail"/><span>antd 组件</span></span>}>
                        <Menu.Item key="/">
                            <Icon type="user"/>
                            <span>button</span>
                            <NavLink to='/'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/input">
                            <Icon type="video-camera"/>
                            <span>input</span>
                            <NavLink to='/input'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/table">
                            <Icon type="video-camera"/>
                            <span>table</span>
                            <NavLink to='/table'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/form_rule">
                            <Icon type="video-camera"/>
                            <span>表单form</span>
                            <NavLink to='/form_rule'></NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="mail"/><span>react 使用</span></span>}>
                        <Menu.Item key="/private_route">
                            <Icon type="video-camera"/>
                            <span>PrivateRoute</span>
                            <NavLink to='/private_route'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/component">
                            <Icon type="video-camera"/>
                            <span>组件写法</span>
                            <NavLink to='/component'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/hoc">
                            <Icon type="video-camera"/>
                            <span>高阶组件</span>
                            <NavLink to='/hoc'></NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="setting"/><span>mobx 使用</span></span>}>
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
                    <SubMenu key="sub4" title={<span><Icon type="setting"/><span>mobx-vm 使用</span></span>}>
                        <Menu.Item key="/mobx_vm">
                            <Icon type="video-camera"/>
                            <span>mobx 双向绑定</span>
                            <NavLink to='/mobx_vm'></NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="setting"/><span>gaea-editor 使用</span></span>}>
                        <Menu.Item key="/gaea_editor">
                            <Icon type="video-camera"/>
                            <span>gaea_editor</span>
                            <NavLink to='/gaea_editor'></NavLink>
                        </Menu.Item>
                        <Menu.Item key="/gaea_antd_button">
                            <Icon type="video-camera"/>
                            <span>gaea_antd_button</span>
                            <NavLink to='/gaea_antd_button'></NavLink>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default withRouter(MenuDemo)
