import {
    StackNavigationOptions,
    createStackNavigator,
} from '@react-navigation/stack';
import Index from './screens';
import Utilities from './screens/utilities';
import GoHomeBtn from '../../components/GoHomeBtn';
import D_otp from './screens/D-OTP';
import ForgotPassword from './screens/ForgotPassword';
import E_MBee from './screens/eMBee';
import { BottomAndStackNavigationType } from '../../utils/types';

const Stack = createStackNavigator();

function Login({ navigation }: BottomAndStackNavigationType) {
    const setHeaderTitle = (
        title: string,
        homeBtn = true,
    ): StackNavigationOptions => ({
        headerTitleAlign: 'center',
        title,
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: '#002DD2',
            height: 65,
        },
        headerRight: () =>
            homeBtn && (
                <GoHomeBtn onPress={() => navigation.navigate('login/index')} />
            ),
    });
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="login/index"
                component={Index}
                options={{
                    header: () => null,
                }}
            />
            <Stack.Screen
                name="login/utilities"
                component={Utilities}
                options={setHeaderTitle('Tiện ích')}
            />
            <Stack.Screen
                name="login/D-OTP"
                component={D_otp}
                options={setHeaderTitle('Xác thực D-OTP')}
            />
            <Stack.Screen
                name="login/forgot-password"
                component={ForgotPassword}
                options={setHeaderTitle('Yêu cầu lấy lại mật khẩu')}
            />
            <Stack.Screen
                name="login/eMBee"
                component={E_MBee}
                options={setHeaderTitle('eMBee Helper', false)}
            />
        </Stack.Navigator>
    );
}

export default Login;
