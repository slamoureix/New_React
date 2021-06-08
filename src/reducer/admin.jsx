import Error from '../pages/404/404';

export const AdminRoutes = {
Admin: {
    Error: {
        path: '',
        name: 'Erreur',
        component: Error,
    }
}
}

export default function RoutesReducer(state = AdminRoutes) {
    return state;
}