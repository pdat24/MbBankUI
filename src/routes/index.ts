import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Login, Home, Products, Gifts, Mbpp, Utilities } from '../screens';
import { ReactElement } from 'react';

interface IRoutes {
    name: string;
    component: () => ReactElement;
    options: BottomTabNavigationOptions;
}

function noHeaderAndBottom(name: string, component: () => ReactElement) {
    const options: BottomTabNavigationOptions = {
        tabBarStyle: {
            display: 'none',
        },
        header: () => null,
    };
    return {
        name,
        component,
        options,
    };
}

function headerAndBottom(
    title: string,
    name: string,
    component: () => ReactElement,
) {
    const options: BottomTabNavigationOptions = {
        title,
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: '#002DD2',
        },
        tabBarStyle: {
            display: 'none',
        },
    };
    return {
        name,
        component,
        options,
    };
}

const routes: IRoutes[] = [
    noHeaderAndBottom('login', Login),
    noHeaderAndBottom('home', Home),
    headerAndBottom('Sản phẩm', 'products', Products),
    headerAndBottom('Tích điểm đổi quà', 'gifts', Gifts),
    headerAndBottom('MB++', 'mb++', Mbpp),
    headerAndBottom('Tiện ích', 'utilities', Utilities),
];

export default routes;
