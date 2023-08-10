import {
    Image,
    Modal,
    Pressable,
    ScrollView,
    TouchableOpacity,
    View,
} from 'react-native';
import { StyledText } from '../../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import { Dispatch, SetStateAction } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

function Profile({
    visible,
    setVisible,
}: {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}) {
    const navigation = useNavigation();
    const info = [
        {
            icon: <Feather name="smartphone" size={28} color="#002DD2" />,
            title: 'Quản lý thiết bị',
        },
        {
            icon: <Ionicons name="key-outline" size={28} color="#002DD2" />,
            title: 'Thay đổi mật khẩu',
        },
        {
            icon: (
                <MaterialCommunityIcons
                    name="email-alert-outline"
                    size={28}
                    color="#002DD2"
                />
            ),
            title: 'Thông tin email',
        },
        {
            icon: (
                <MaterialCommunityIcons
                    name="email-send-outline"
                    size={28}
                    color="#002DD2"
                />
            ),
            title: 'Gửi hỗ trợ',
        },
        // {icon: '', title: ''},
        // {icon: '', title: ''},
    ];
    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.cover}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <StyledText style={styles.title}>
                            Cài đặt tài khoản
                        </StyledText>
                        <Pressable onPress={() => setVisible(false)}>
                            <AntDesign name="close" size={26} color="#fff" />
                        </Pressable>
                    </View>
                    <ScrollView style={styles.body}>
                        <View style={styles.personal}>
                            <Image
                                resizeMode="contain"
                                style={styles.avatar}
                                source={require('../../../assets/imgs/avatar.webp')}
                            />
                            <View style={styles.content}>
                                <View style={styles.block}>
                                    <StyledText
                                        style={styles.name}
                                        fontStyle="Medium">
                                        pham quoc dat
                                    </StyledText>
                                    <Image
                                        resizeMode="contain"
                                        style={styles.shield}
                                        source={require('../../../assets/imgs/Login/shield.png')}
                                    />
                                </View>
                                <StyledText style={styles.loginName}>
                                    Tên đăng nhập: 0464739173
                                </StyledText>
                            </View>
                        </View>
                        <View style={{ marginTop: 12 }}>
                            {info.map(item => (
                                <View style={styles.bodyLink} key={item.title}>
                                    <View style={styles.left}>
                                        {item.icon}
                                        <StyledText style={styles.linkTitle}>
                                            {item.title}
                                        </StyledText>
                                    </View>
                                    <AntDesign
                                        name="right"
                                        size={18}
                                        color="#2E1C5A"
                                    />
                                </View>
                            ))}
                            <View style={styles.bodyLink}>
                                <View style={styles.left}>
                                    <MaterialCommunityIcons
                                        name="information-outline"
                                        size={28}
                                        color="#002DD2"
                                    />
                                    <StyledText style={styles.linkTitle}>
                                        Phiên bản chợ 28.1.0
                                    </StyledText>
                                </View>
                                <StyledText
                                    style={{
                                        color: '#002DD2',
                                        textDecorationLine: 'underline',
                                    }}
                                    fontStyle="Bold">
                                    Đã có bản mới
                                </StyledText>
                            </View>
                            <View style={styles.bodyLink}>
                                <View style={styles.left}>
                                    <MaterialCommunityIcons
                                        name="information-outline"
                                        size={28}
                                        color="#002DD2"
                                    />
                                    <StyledText style={styles.linkTitle}>
                                        Phiên bản app v661
                                    </StyledText>
                                </View>
                                <StyledText
                                    style={{
                                        color: '#002DD2',
                                        textDecorationLine: 'underline',
                                    }}
                                    fontStyle="Bold">
                                    Kiểm tra phiên chợ
                                </StyledText>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.bottom}>
                        <TouchableOpacity
                            style={styles.sendBtn}
                            onPress={() => {
                                setVisible(false);
                                navigation.navigate('login');
                            }}>
                            <StyledText style={styles.sendBtnText}>
                                Đăng xuất
                            </StyledText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'relative',
    },
    loginName: {
        color: '#3f3f46',
        fontSize: 16,
    },
    shield: {
        width: 32,
        height: 32,
    },
    name: {
        color: '#002DD2',
        textTransform: 'uppercase',
        fontSize: 28,
    },
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    content: {},
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    personal: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 20,
    },
    body: {
        paddingVertical: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#241252',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    cover: {
        backgroundColor: '#00000099',
        paddingTop: 36,
        height: '100%',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        flex: 1,
    },
    bodyLink: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e4e4e7',
        paddingHorizontal: 20,
    },
    linkTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    bottom: {
        position: 'absolute',
        width: '100%',
        padding: 16,
        bottom: 0,
    },
    sendBtn: {
        padding: 12,
        backgroundColor: '#002DD2',
    },
    sendBtnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
});

export default Profile;
