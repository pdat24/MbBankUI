import {
    Animated,
    Image,
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { StyledText } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Body from './Body';
import BottomTab from '../../components/BottomTab';
import { BottomAndStackNavigationType } from '../../utils/types';
import Profile from './modals/Profile';
import { RefObject, useEffect, useRef, useState } from 'react';
import E_MBeeModal from './modals/eMBee';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';

const event = new EventEmitter();

function Finance() {
    const container = useRef() as RefObject<View>;
    const expand = () =>
        container.current?.setNativeProps({
            style: {
                height: 'auto',
                padding: 20,
            },
        });
    const shrink = () =>
        container.current?.setNativeProps({
            style: {
                height: 0,
                padding: 0,
            },
        });
    useEffect(() => {
        event.addListener('expand', expand);
        event.addListener('shrink', shrink);
        return () => {
            event.removeAllListeners('expand');
            event.removeAllListeners('shrink');
        };
    }, []);

    return (
        <Animated.View style={styles.finance} ref={container}>
            <View>
                <TouchableOpacity style={styles.financeItem}>
                    <Image
                        source={require('../../assets/imgs/avatar.webp')}
                        resizeMode="contain"
                        style={styles.avatar}
                    />
                    <View>
                        <StyledText
                            fontStyle="Bold"
                            style={{
                                fontSize: 20,
                                color: '#4f46e5',
                            }}>
                            Bee Rich
                        </StyledText>
                        <StyledText style={{ color: '#404040' }}>
                            Trợ thủ tài chính cá nhân
                        </StyledText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.financeItem, styles.financeItem2]}>
                    <View>
                        <StyledText
                            fontStyle="Bold"
                            style={{ fontSize: 16, color: '#000' }}>
                            Tài khoản nguồn &nbsp;
                            <StyledText style={styles.phoneNumber}>
                                084724857281
                            </StyledText>
                        </StyledText>
                        <StyledText
                            style={{
                                color: '#4f46e5',
                                fontSize: 20,
                            }}
                            fontStyle="Bold">
                            953,646,235
                            <StyledText style={styles.currency}>VND</StyledText>
                        </StyledText>
                    </View>
                    <Entypo name="chevron-right" size={24} color="#a3a3a3" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.financeItem, styles.financeItem2]}>
                    <StyledText
                        style={styles.financeItemTitle}
                        fontStyle="Bold">
                        Điểm thưởng &nbsp;
                        <StyledText style={{ color: '#7dd3fc' }}>
                            0 point
                        </StyledText>
                    </StyledText>
                    <Entypo name="chevron-right" size={24} color="#a3a3a3" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.financeItem, styles.financeItem2]}>
                    <StyledText
                        style={styles.financeItemTitle}
                        fontStyle="Bold">
                        Thẻ &nbsp;
                    </StyledText>
                    <Entypo name="chevron-right" size={24} color="#a3a3a3" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.financeItem, styles.financeItem2]}>
                    <StyledText
                        style={styles.financeItemTitle}
                        fontStyle="Bold">
                        Tài khoản tiền gửi số &nbsp;
                    </StyledText>
                    <Entypo name="chevron-right" size={24} color="#a3a3a3" />
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}

function Home({ navigation, route }: BottomAndStackNavigationType) {
    const [showProfile, setShowProfile] = useState(false);
    const [showEMBeeChat, setShowEMBeeChat] = useState(false);
    const [showFinances, setShowFinances] = useState(false);

    return (
        <View
            style={{
                position: 'relative',
                minHeight: '100%',
            }}>
            <ScrollView>
                <View style={{ paddingBottom: 80 }}>
                    <View style={{ position: 'relative' }}>
                        <ImageBackground
                            source={require('../../assets/imgs/defaultbg.webp')}
                            resizeMode="stretch">
                            <View style={styles.top}>
                                <View style={styles.header}>
                                    <View style={styles.headerIconBlock}>
                                        <Pressable
                                            onPress={() =>
                                                setShowProfile(true)
                                            }>
                                            <AntDesign
                                                name="user"
                                                size={26}
                                                color="#fff"
                                            />
                                        </Pressable>
                                        <Pressable
                                            onPress={() =>
                                                setShowEMBeeChat(true)
                                            }>
                                            <Ionicons
                                                name="chatbubbles-outline"
                                                size={26}
                                                color="#fff"
                                            />
                                        </Pressable>
                                    </View>
                                    <View style={styles.headerCenter}>
                                        <Image
                                            source={require('../../assets/imgs/Login/MB_Military_Bank_logo.png')}
                                            resizeMode="contain"
                                            style={styles.logo}
                                        />
                                    </View>
                                    <View style={styles.headerIconBlock}>
                                        <Ionicons
                                            name="search"
                                            size={26}
                                            color="#fff"
                                        />
                                        <MaterialCommunityIcons
                                            name="bell-badge-outline"
                                            size={26}
                                            color="#fff"
                                        />
                                    </View>
                                </View>
                                <View style={styles.info}>
                                    <StyledText style={styles.greeting}>
                                        Xin chào,
                                    </StyledText>
                                    <StyledText style={styles.name}>
                                        pham quoc dat
                                    </StyledText>
                                    <View style={styles.shieldBlock}>
                                        <Image
                                            source={require('../../assets/imgs/Login/shield.png')}
                                            resizeMode="contain"
                                            style={styles.shield}
                                        />
                                        <StyledText style={styles.shieldText}>
                                            kích hoạt để được bảo vệ
                                        </StyledText>
                                    </View>
                                    <StyledText
                                        fontStyle="Medium"
                                        style={[
                                            styles.greeting,
                                            { fontSize: 16, marginTop: 12 },
                                        ]}>
                                        {showFinances
                                            ? 'Tài khoản của tôi'
                                            : 'Xem tài khoản'}
                                    </StyledText>
                                </View>
                            </View>
                        </ImageBackground>
                        {!showFinances ? (
                            <View style={styles.dropWrapper}>
                                <Pressable
                                    style={styles.dropBtn}
                                    onPress={() => {
                                        setShowFinances(true);
                                        event.emit('expand');
                                    }}>
                                    <Entypo
                                        name="chevron-small-down"
                                        size={32}
                                        color="black"
                                    />
                                </Pressable>
                            </View>
                        ) : (
                            <View style={styles.dropWrapper}>
                                <Pressable
                                    style={styles.dropBtn}
                                    onPress={() => {
                                        setShowFinances(false);
                                        event.emit('shrink');
                                    }}>
                                    <Entypo
                                        name="chevron-small-up"
                                        size={32}
                                        color="black"
                                    />
                                </Pressable>
                            </View>
                        )}
                        <Finance />
                    </View>
                    <Body />
                </View>
            </ScrollView>
            <BottomTab navigation={navigation} route={route} />
            {/* Modals */}
            <Profile visible={showProfile} setVisible={setShowProfile} />
            <E_MBeeModal
                visible={showEMBeeChat}
                setVisible={setShowEMBeeChat}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        padding: 12,
        paddingBottom: 48,
    },
    header: {
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-between',
    },
    headerCenter: {
        position: 'absolute',
        width: '100%',
        left: 0,
        alignItems: 'center',
        top: 0,
    },
    headerIconBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
    },
    logo: {
        width: 100,
        height: 40,
    },
    info: {
        marginTop: 32,
    },
    greeting: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    shield: {
        width: 25,
        height: 25,
    },
    shieldBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        justifyContent: 'center',
        marginTop: 8,
    },
    shieldText: {
        color: '#d97706',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
    },
    dropWrapper: {
        position: 'absolute',
        bottom: -22,
        alignItems: 'center',
        left: 10,
        zIndex: 1,
        width: '100%',
    },
    dropBtn: {
        width: 44,
        height: 44,
        backgroundColor: '#fff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: 'gray',
    },
    finance: {
        backgroundColor: '#e0e7ff',
        overflow: 'hidden',
        height: 0,
    },
    financeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingHorizontal: 16,
        paddingVertical: 18,
        backgroundColor: '#fff',
        borderRadius: 6,
        elevation: 4,
        marginBottom: 20,
        shadowColor: 'gray',
    },
    financeItem2: {
        justifyContent: 'space-between',
    },
    financeItemTitle: { color: '#000', fontSize: 16 },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    phoneNumber: {
        fontSize: 14,
        color: '#7dd3fc',
    },
    currency: {
        color: '#404040',
        fontSize: 14,
    },
});

export default Home;
