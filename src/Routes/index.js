import Home from '~/Pages/Home';
import CartPage from '~/Pages/CartPage';

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/cartpage', component: CartPage}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes}