import React from 'react';
import Bundle from './projectTools/bundle';

export default [
    {
        path: '/',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/ButtonDemo')}/>;
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
            return <Bundle {...props} load={() => import('./components/PrivateRouteDemo')}/>;
        }
    },
    {
        path: '/table',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/tableDemo/TableDemo')}/>;
        }
    },
    {
        path: '/component',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/componentDemo')}/>;
        }
    },
    {
        path: '/form_rule',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/form/ExportForm')}/>;
        }
    },
    {
        path: '/mobx_router',
        exact: true,
        component(props) {
            return <Bundle {...props} load={() => import('./components/mobx_router/MobxRouterDemo')}/>;
        }
    }
];
