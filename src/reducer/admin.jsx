import Error from '../pages/404/Error404';


export const AdminRoutes = {
Admin: {
    Error: {
        path: null,
        name: 'Erreur',
        component: Error,
    }
}
}

export default function RoutesReducer(state = AdminRoutes) {
    return state;
}