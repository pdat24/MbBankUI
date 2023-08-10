import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { FeatureNavigation, StyledText } from '../../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import { Dispatch, SetStateAction } from 'react';
import ModalWrapper from './ModalWrapper';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Payment({
    visible,
    setVisible,
}: {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}) {
    const QRPayment = [
        {
            icon: (
                <MaterialCommunityIcons
                    name="line-scan"
                    size={28}
                    color="#002DD2"
                />
            ),
            title: 'Quét QR',
        },
        {
            icon: <Feather name="trending-up" size={28} color="#002DD2" />,
            title: 'Quản lý VietQR',
        },
        {
            icon: <AntDesign name="sharealt" size={28} color="#002DD2" />,
            title: 'Chia sẻ biến động số dư',
        },
    ];
    const familyBills = [
        {
            icon: <Ionicons name="logo-electron" size={28} color="#002DD2" />,
            title: 'Điện',
        },
        {
            icon: <Ionicons name="water-outline" size={28} color="#002DD2" />,
            title: 'Nước',
        },
        {
            icon: <Entypo name="network" size={28} color="#002DD2" />,
            title: 'Internet',
        },
        {
            icon: <Entypo name="tv" size={28} color="#002DD2" />,
            title: 'Truyền hình',
        },
        {
            icon: <Feather name="smartphone" size={28} color="#002DD2" />,
            title: 'Di động trả sau',
        },
        {
            icon: <Entypo name="old-phone" size={28} color="#002DD2" />,
            title: 'Điện thoại cố định',
        },
    ];
    const publibService = [
        {
            icon: <AntDesign name="car" size={28} color="#002DD2" />,
            title: 'Dịch vụ công',
        },
        {
            icon: <Entypo name="calculator" size={28} color="#002DD2" />,
            title: 'Thuế',
        },
        {
            icon: <Ionicons name="school-outline" size={28} color="#002DD2" />,
            title: 'Học phí',
        },
        {
            icon: <Entypo name="tree" size={28} color="#002DD2" />,
            title: 'Bảo hiểm xã hội',
        },
    ];
    return (
        <ModalWrapper
            visible={visible}
            setVisible={setVisible}
            title="Thanh toán">
            <View style={{ height: '100%' }}>
                <ScrollView style={styles.container}>
                    <View style={{ paddingBottom: 40 }}>
                        <View>
                            <StyledText style={styles.title}>
                                Thanh toán QR
                            </StyledText>
                            <View style={styles.block}>
                                {QRPayment.map(item => (
                                    <FeatureNavigation
                                        style={styles.item}
                                        key={item.title}
                                        icon={item.icon}
                                        chevron={false}
                                        title={item.title}
                                    />
                                ))}
                            </View>
                        </View>
                        <View>
                            <StyledText style={styles.title}>
                                Hóa đơn gia đình
                            </StyledText>
                            <View style={styles.block}>
                                {familyBills.map(item => (
                                    <FeatureNavigation
                                        style={styles.item}
                                        key={item.title}
                                        icon={item.icon}
                                        chevron={false}
                                        title={item.title}
                                    />
                                ))}
                            </View>
                        </View>
                        <View>
                            <StyledText style={styles.title}>
                                Dịch vụ công
                            </StyledText>
                            <View style={styles.block}>
                                {publibService.map(item => (
                                    <FeatureNavigation
                                        style={styles.item}
                                        key={item.title}
                                        icon={item.icon}
                                        chevron={false}
                                        title={item.title}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ModalWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        color: '#000',
        fontSize: 18,
        marginBottom: 16,
        fontWeight: 'bold',
        marginTop: 20,
    },
    item: {
        width: '47%',
        marginBottom: 16,
        paddingHorizontal: 14,
    },
    block: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default Payment;
