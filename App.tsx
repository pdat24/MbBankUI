import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import routes from './src/routes';

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                {routes.map((route, index) => (
                    <Tab.Screen
                        key={index}
                        name={route.name}
                        component={route.component}
                        options={route.options}
                    />
                ))}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
