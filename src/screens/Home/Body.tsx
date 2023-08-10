import {
    Image,
    Pressable,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { StyledText } from '../../components';
import Feather from 'react-native-vector-icons/Feather';
import gStyle from '../../utils/GlobalStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import SendMoney from './modals/SendMoney';
import Recharge from './modals/Recharge';
import Payment from './modals/Payment';
import Slide from './Slide';

const apps = [
    { img: require('../../assets/imgs/landstock.webp'), title: 'Bất động sản' },
    { img: require('../../assets/imgs/5G.webp'), title: 'Data 4G/5G' },
    {
        img: require('../../assets/imgs/game.webp'),
        title: 'Megatek - Thẻ game 247',
    },
    {
        img: require('../../assets/imgs/game2.jpg'),
        title: 'IRIS - Thẻ Game 365',
    },
    { img: require('../../assets/imgs/fly.webp'), title: 'Vé máy bay' },
    { img: require('../../assets/imgs/stock.webp'), title: 'Chứng khoán' },
    {
        img: require('../../assets/imgs/bitcoin.webp'),
        title: 'Hệ thống Bitcoin',
    },
];

function Body() {
    const [showSendMoneyModal, setShowSendMoneyModal] = useState(false);
    const [showRechargeModal, setShowRechargeModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const features = [
        {
            icon: (
                <FontAwesome5 name="exchange-alt" size={24} color="#002DD2" />
            ),
            title: 'Chuyển tiền',
            onPress: () => setShowSendMoneyModal(true),
        },
        {
            icon: (
                <MaterialCommunityIcons
                    name="cellphone-check"
                    size={24}
                    color="#002DD2"
                />
            ),
            title: 'Nạp điện thoại',
            onPress: () => setShowRechargeModal(true),
        },
        {
            icon: <FontAwesome5 name="piggy-bank" size={24} color="#CD1D1D" />,
            title: 'Tiền gủi & Đầu tư',
        },
        {
            icon: (
                <FontAwesome5 name="money-bill-alt" size={24} color="#002DD2" />
            ),
            title: 'Thanh toán',
            onPress: () => setShowPaymentModal(true),
        },
        {
            icon: (
                <FontAwesome5
                    name="hand-holding-usd"
                    size={24}
                    color="#002DD2"
                />
            ),
            title: 'Vay Online',
        },
        {
            icon: <FontAwesome name="credit-card" size={24} color="#002DD2" />,
            title: 'Dịch vụ thẻ',
        },
    ];
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.featureHeader}>
                    <StyledText style={styles.title}>
                        Tính năng chính
                    </StyledText>
                    <Pressable
                        style={{
                            flexDirection: 'row',
                            gap: 4,
                            alignItems: 'center',
                        }}>
                        <Feather name="edit" size={20} color="#002DD2" />
                        <StyledText
                            style={[
                                styles.title,
                                gStyle.primaryColor,
                                { fontWeight: '400' },
                            ]}>
                            Tùy chỉnh
                        </StyledText>
                    </Pressable>
                </View>
                <View style={styles.featureBlock}>
                    {features.map((feature, index) => (
                        <TouchableOpacity
                            onPress={feature.onPress}
                            style={styles.featureItem}
                            key={index}>
                            {feature.icon}
                            <StyledText
                                fontStyle="Medium"
                                style={{
                                    fontSize: 16,
                                    color: '#000',
                                    textAlign: 'center',
                                    marginTop: 4,
                                }}>
                                {feature.title}
                            </StyledText>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View>
                <StyledText style={styles.title}>Chợ ứng dụng</StyledText>
                <View style={styles.appBlock}>
                    {apps.map((app, index) => (
                        <Pressable style={styles.appstoreItem} key={index}>
                            <Image
                                style={styles.appThumbnail}
                                resizeMode="contain"
                                source={app.img}
                            />
                            <StyledText
                                fontStyle="Medium"
                                style={styles.appTitle}>
                                {app.title}
                            </StyledText>
                        </Pressable>
                    ))}
                    <Pressable style={styles.appstoreItem}>
                        <View style={[styles.appThumbnail, styles.moreApp]}>
                            <Feather name="grid" size={24} color="black" />
                            <View style={styles.badge}>
                                <StyledText
                                    fontStyle="Bold"
                                    style={styles.badgeNumber}>
                                    50
                                </StyledText>
                            </View>
                        </View>
                        <StyledText fontStyle="Medium" style={styles.appTitle}>
                            Xem thêm
                        </StyledText>
                    </Pressable>
                </View>
            </View>
            <View>
                <View style={[styles.featureHeader, { alignItems: 'center' }]}>
                    <StyledText style={styles.title}>
                        Khuyến mãi cho bạn
                    </StyledText>
                    <Pressable>
                        <StyledText
                            style={[styles.moreTitle, gStyle.primaryColor]}>
                            Xem thêm
                        </StyledText>
                    </Pressable>
                </View>
                <Slide />
            </View>
            {/* Modals */}
            <SendMoney
                visible={showSendMoneyModal}
                setVisible={setShowSendMoneyModal}
            />
            <Recharge
                visible={showRechargeModal}
                setVisible={setShowRechargeModal}
            />
            <Payment
                visible={showPaymentModal}
                setVisible={setShowPaymentModal}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 32,
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    featureBlock: {
        marginTop: 16,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    featureHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        marginTop: 12,
    },
    featureItem: {
        backgroundColor: '#fff',
        minHeight: 100,
        width: '30%',
        justifyContent: 'center',
        borderRadius: 6,
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 12,
        elevation: 4,
        shadowColor: '#717171',
        marginBottom: 16,
    },
    appstoreItem: {
        alignItems: 'center',
        minHeight: 100,
        width: '25%',
    },
    appThumbnail: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginBottom: 8,
    },
    appBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 32,
        paddingBottom: 16,
        borderRadius: 18,
        overflow: 'hidden',
        backgroundColor: '#dbeafe',
        marginTop: 12,
        borderWidth: 1,
        borderColor: '#bfdbfe',
        marginBottom: 24,
    },
    moreApp: {
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    badgeNumber: {
        fontSize: 12,
    },
    badge: {
        backgroundColor: '#be123c',
        borderRadius: 6,
        width: 22,
        height: 16,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -4,
        right: -8,
    },
    appTitle: {
        color: '#000',
        textAlign: 'center',
        fontSize: 12,
    },
    moreTitle: {
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Body;
