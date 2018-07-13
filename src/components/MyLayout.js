import React from 'react'
import {Layout, Icon, Button} from 'antd';
import {
    Switch,
} from 'react-router-dom'
import router from '../router';
import MenuDemo from './menu/MenuDemo'
import PrivateRoute from '../projectTools/PrivateRoute'
import {withRouter} from "react-router";
// import history from "../projectTools/history";
import NotFound from "./NotFound";
import {inject, observer} from "mobx-react";

const {Header, Sider, Content} = Layout;

@inject('routingStore')
@observer
class MyLayout extends React.Component {

    state = {
        collapsed: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    logout = () => {
        localStorage.removeItem('isLogin')
        this.props.routingStore.history.push('/login')
    }

    render() {
        const {
            location,
            // push,
            // goBack
        } = this.props.routingStore;

        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <MenuDemo/>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', paddingLeft: '20px'}}>
                        <Icon
                            style={{
                                float: 'left',
                                position: 'relative',
                                top: '26px'
                            }}
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <div style={{
                            float: 'left',
                            position: 'relative',
                            left: '50px'
                        }}>当前路径：{location.pathname} 当前路径search：{location.search}</div>
                        <Button onClick={this.logout}
                                style={{float: 'right', top: '15px', position: 'relative', right: '-35px'}}>退出</Button>
                    </Header>
                    <Content style={{margin: '10px', padding: 10, background: '#fff', minHeight: 280}}>
                        <Switch>
                            {router.map((route, i) => <PrivateRoute key={i} exact={!!route.exact} path={route.path}
                                                                    component={route.component}/>)}
                            <PrivateRoute component={NotFound}/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(MyLayout)
