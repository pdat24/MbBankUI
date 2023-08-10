import { FeatureNavigation } from '../../components';
import { ScrollView, StyleSheet, View } from 'react-native';
import BottomTab from '../../components/BottomTab';
import { BottomTabNavigationType } from '../../utils/types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const features = [
    {
        icon: <FontAwesome5 name="exchange-alt" size={24} color="#002DD2" />,
        title: 'Chuyển tiền',
    },
    {
        icon: <Fontisto name="money-symbol" size={24} color="#002DD2" />,
        title: 'Giao dịch ngoại tệ',
    },
    {
        icon: (
            <MaterialCommunityIcons
                name="cellphone-sound"
                size={24}
                color="#002DD2"
            />
        ),
        title: 'Chuyển tiền đến Viettal Money',
    },
    {
        icon: (
            <MaterialCommunityIcons
                name="cellphone-check"
                size={24}
                color="#002DD2"
            />
        ),
        title: 'Nạp tiền điện thoại',
    },
    {
        icon: <AntDesign name="creditcard" size={24} color="#002DD2" />,
        title: 'Nạp tiền từ thẻ ATM',
    },
    {
        icon: <FontAwesome5 name="money-bill-alt" size={24} color="#002DD2" />,
        title: 'Thanh toán',
    },
    {
        icon: (
            <MaterialCommunityIcons
                name="hand-coin-outline"
                size={24}
                color="#002DD2"
            />
        ),
        title: 'Dịch vụ trả góp thẻ tín dụng',
    },
    {
        icon: <AntDesign name="redenvelopes" size={24} color="#002DD2" />,
        title: 'Quà tặng',
    },
];

function Products({ navigation, route }: BottomTabNavigationType) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.body} scrollsToTop>
                <View style={{ paddingBottom: 80 }}>
                    {features.map((feature, index) => (
                        <FeatureNavigation
                            style={{ marginBottom: 16 }}
                            icon={feature.icon}
                            key={index}
                            title={feature.title}
                        />
                    ))}
                </View>
            </ScrollView>
            <BottomTab navigation={navigation} route={route} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
    },
    body: {
        padding: 20,
    },
});

export default Products;
