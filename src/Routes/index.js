import Home from '~/Pages/Home';
import Description from '~/Pages/Description';

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/description', component: Description}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes}