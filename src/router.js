import React from 'react';
import Bundle from './projectTools/bundle';

export default [
    {
        path: '/',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/antd/ButtonDemo')}/>;
        }
    },
    {
        path: '/input',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/mobx/InputDemo')}/>;
        }
    },
    {
        path: '/mobx_vm',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/mobx/MobxVM')}/>;
        }
    },
    {
        path: '/mobx_computed',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/mobx/ComputedDemo')}/>;
        }
    },
    {
        path: '/private_route',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/react/PrivateRouteDemo')}/>;
        }
    },
    {
        path: '/table',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/antd/tableDemo/TableDemo')}/>;
        }
    },
    {
        path: '/component',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/react/componentDemo')}/>;
        }
    },
    {
        path: '/form_rule',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/antd/ExportForm')}/>;
        }
    },
    {
        path: '/mobx_router',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/mobx_router/MobxRouterDemo')}/>;
        }
    },
    {
        path: '/gaea_editor',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/gaea_editor/GaeaEditorDemo')}/>;
        }
    },
    {
        path: '/gaea_antd_button',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/gaea_editor/custom_antd/AntdButton')}/>;
        }
    }
];
