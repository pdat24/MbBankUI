import { FeatureNavigation, StyledText } from '../../components';
import {
    ScrollView,
    StyleSheet,
    Switch,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import BottomTab from '../../components/BottomTab';
import { BottomTabNavigationType } from '../../utils/types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

const features = [
    {
        icon: <FontAwesome5 name="sms" size={28} color="#002DD2" />,
        title: 'Thiết lập OTP',
    },
    {
        icon: <FontAwesome5 name="broom" size={28} color="#002DD2" />,
        title: 'Chọn giao diện',
    },
    {
        icon: <Feather name="info" size={28} color="#002DD2" />,
        title: 'Thông tin nhân viên hỗ trỡ',
    },
    {
        icon: (
            <MaterialCommunityIcons
                name="bell-badge-outline"
                size={28}
                color="#002DD2"
            />
        ),
        title: 'Đăng ký biến động số dư',
    },
    {
        icon: (
            <MaterialIcons name="qr-code-scanner" size={28} color="#002DD2" />
        ),
        title: 'Danh sach mã QR',
    },
    {
        icon: (
            <MaterialIcons
                name="published-with-changes"
                size={28}
                color="#002DD2"
            />
        ),
        title: 'Thay đổi hạn mức chuyển tiền',
    },
    {
        icon: (
            <MaterialCommunityIcons
                name="newspaper-minus"
                size={28}
                color="#002DD2"
            />
        ),
        title: 'Giao dịch nộp/rút tiền tại quầy',
    },
    {
        icon: (
            <MaterialCommunityIcons
                name="newspaper-check"
                size={28}
                color="#002DD2"
            />
        ),
        title: 'Xác nhận giao dịch tại quầy',
    },
];

function Utilities({ navigation, route }: BottomTabNavigationType) {
    const [fingerprint, setFingerprint] = useState(true);
    const [receive$FromTel, setReceive$FromTel] = useState(true);
    const [showCardNumber, setShowCardNumber] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.body} scrollsToTop>
                <View style={{ paddingBottom: 80 }}>
                    <View style={styles.itemBlock}>
                        <View style={styles.left}>
                            <MaterialIcons
                                name="fingerprint"
                                size={28}
                                color="#002DD2"
                            />
                            <View style={styles.textBlock}>
                                <StyledText style={styles.title}>
                                    Đăng nhập bằng vân tay
                                </StyledText>
                            </View>
                        </View>
                        <Switch
                            value={fingerprint}
                            onChange={() => setFingerprint(!fingerprint)}
                            trackColor={{ true: '#002DD2', false: '#d4d4d8' }}
                            thumbColor={'#9ca3af'}
                        />
                    </View>
                    <View style={styles.itemBlock}>
                        <View style={styles.left}>
                            <MaterialCommunityIcons
                                name="phone-message-outline"
                                size={28}
                                color="#002DD2"
                            />
                            <View style={styles.textBlock}>
                                <StyledText style={styles.title}>
                                    Nhận tiền từ số điện thoại
                                </StyledText>
                            </View>
                        </View>
                        <Switch
                            value={receive$FromTel}
                            onChange={() =>
                                setReceive$FromTel(!receive$FromTel)
                            }
                            trackColor={{ true: '#002DD2', false: '#d4d4d8' }}
                            thumbColor={'#9ca3af'}
                        />
                    </View>
                    <View style={styles.itemBlock}>
                        <View style={styles.left}>
                            <MaterialCommunityIcons
                                name="phone-message-outline"
                                size={28}
                                color="#002DD2"
                            />
                            <View style={styles.textBlock}>
                                <StyledText style={styles.title}>
                                    Hiển thị số thẻ
                                </StyledText>
                            </View>
                        </View>
                        <Switch
                            value={showCardNumber}
                            onChange={() => setShowCardNumber(!showCardNumber)}
                            trackColor={{ true: '#002DD2', false: '#d4d4d8' }}
                            thumbColor={'#9ca3af'}
                        />
                    </View>
                    {features.map((feature, index) => (
                        <FeatureNavigation
                            style={{ marginBottom: 16 }}
                            icon={feature.icon}
                            key={index}
                            title={feature.title}
                            chevron={false}
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
    itemBlock: {
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 24,
        paddingHorizontal: 16,
        elevation: 4,
        shadowColor: '#7E7F87',
        marginBottom: 16,
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    textBlock: {
        paddingRight: 32,
        paddingLeft: 16,
    },
});

export default Utilities;
