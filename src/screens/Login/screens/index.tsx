import {
    Alert,
    Image,
    ImageBackground,
    Pressable,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import lStyles from './Login.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyledText } from '../../../components';
import { TouchableHighlight } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
    BottomTabScreenList,
    StackScreenList,
} from '../../../utils/navigations';
import { useState } from 'react';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

enum language {
    vn,
    eng,
}
type Props = StackScreenProps<StackScreenList> &
    BottomTabScreenProps<BottomTabScreenList>;

function Body({ navigation }: Props) {
    const [showPass, setShowPass] = useState(false);

    return (
        <View style={lStyles.body}>
            <View style={{ paddingTop: 20 }}>
                <View style={lStyles.beelogoWrapper}>
                    <View style={lStyles.beeWrapper}>
                        <Image
                            source={require('../../../assets/imgs/avatar.webp')}
                            alt="bee"
                            style={lStyles.beeImg}
                        />
                    </View>
                </View>
                <View>
                    <StyledText style={lStyles.hiWord}>Xin chào,</StyledText>
                    <StyledText style={lStyles.username} fontStyle="Bold">
                        pham quoc dat
                    </StyledText>
                </View>
            </View>
            <View>
                <View style={lStyles.entryWrapper}>
                    <TextInput
                        placeholderTextColor={'#fff'}
                        placeholder="Mật khẩu"
                        secureTextEntry={!showPass}
                        style={lStyles.entry}
                        defaultValue="admin@1234"
                    />
                    <TouchableWithoutFeedback
                        onPress={() => setShowPass(!showPass)}>
                        {showPass ? (
                            <Entypo name="eye" size={24} color="#fff" />
                        ) : (
                            <Entypo
                                name="eye-with-line"
                                size={24}
                                color="#fff"
                            />
                        )}
                    </TouchableWithoutFeedback>
                    <TouchableHighlight>
                        <Ionicons
                            style={lStyles.fingerPrint}
                            name="finger-print-outline"
                            size={24}
                            color="#0284c7"
                        />
                    </TouchableHighlight>
                </View>
                <TouchableHighlight
                    style={lStyles.loginBtn}
                    onPress={() => navigation.navigate('home')}>
                    <StyledText style={{ fontSize: 18, fontWeight: 'bold' }}>
                        Đăng nhập
                    </StyledText>
                </TouchableHighlight>
                <View style={lStyles.passOptionsWrapper}>
                    <Pressable
                        onPress={() =>
                            navigation.navigate('login/forgot-password')
                        }>
                        <StyledText style={lStyles.passOptions}>
                            quên mật khẩu?
                        </StyledText>
                    </Pressable>
                    <StyledText style={lStyles.passOptions}>
                        đăng nhập tài khoản khác
                    </StyledText>
                </View>
            </View>
        </View>
    );
}

//
function BottomTab({ navigation }: Props) {
    return (
        <View style={lStyles.navbar}>
            <Pressable style={lStyles.navLink}>
                <MaterialCommunityIcons
                    name="qrcode-scan"
                    size={30}
                    color="#60a5fa"
                />
                <StyledText style={lStyles.navLinkLabel}>Quét QR</StyledText>
            </Pressable>
            <Pressable
                style={lStyles.navLink}
                onPress={() => navigation.navigate('login/D-OTP')}>
                <MaterialCommunityIcons
                    name="account-lock-open-outline"
                    size={30}
                    color="#60a5fa"
                />
                <StyledText style={lStyles.navLinkLabel}>
                    Xác thực D-OTP
                </StyledText>
            </Pressable>
            <Pressable
                style={lStyles.navLink}
                onPress={() => navigation.navigate('login/utilities')}>
                <MaterialIcons name="menu-book" size={30} color="#60a5fa" />
                <StyledText style={lStyles.navLinkLabel}>Tiện ích</StyledText>
            </Pressable>
            <Pressable
                style={lStyles.navLink}
                onPress={() => navigation.navigate('login/eMBee')}>
                <Ionicons
                    name="chatbubbles-outline"
                    size={30}
                    color="#60a5fa"
                />
                <StyledText style={lStyles.navLinkLabel}>
                    Chat với aMBee
                </StyledText>
            </Pressable>
        </View>
    );
}

function Index({ navigation, route }: Props) {
    const [activeLang, setActiveLang] = useState(language.eng);
    const handleChangeLanguage = () => {
        if (activeLang === language.vn) setActiveLang(language.eng);
        else setActiveLang(language.vn);
    };
    const handleShowUpdateAlert = () => {
        setTimeout(() => {
            Alert.alert(
                'Thông bóa',
                'Hiện MB đang có bản cập nhật mới, vui lòng cập nhật trên chợ ứng dụng',
                [{ text: 'Cập nhật' }],
                { cancelable: true },
            );
        }, 500);
    };

    return (
        <ImageBackground
            source={require('../../../assets/imgs/Login/bg5.webp')}>
            <View style={lStyles.container}>
                <View style={lStyles.scrollContainer}>
                    <View style={lStyles.header}>
                        <TouchableOpacity style={lStyles.left}>
                            <MaterialIcons
                                name="system-update-tv"
                                size={30}
                                color="#fff"
                            />
                            <TouchableOpacity onPress={handleShowUpdateAlert}>
                                <StyledText
                                    style={lStyles.updateWord}
                                    fontStyle="Bold">
                                    Cập nhật
                                </StyledText>
                                <StyledText>28.1.2</StyledText>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <View style={lStyles.center}>
                            <Image
                                source={require('../../../assets/imgs/Login/MB_Military_Bank_logo.png')}
                                alt="logo"
                                resizeMode="contain"
                                style={lStyles.logo}
                            />
                        </View>
                        <TouchableOpacity
                            style={lStyles.right}
                            onPress={handleChangeLanguage}>
                            <Image
                                resizeMode="contain"
                                source={
                                    activeLang === language.vn
                                        ? require('../../../assets/imgs/Login/Vn-flad.png')
                                        : require('../../../assets/imgs/Login/UK-flag.jpg')
                                }
                                style={lStyles.flag}
                            />
                            <StyledText
                                style={{ fontSize: 20, color: '#fff' }}
                                fontStyle="Bold">
                                {activeLang === language.vn ? 'VN' : 'ENG'}
                            </StyledText>
                        </TouchableOpacity>
                    </View>
                    <Body navigation={navigation} route={route} />
                    <BottomTab navigation={navigation} route={route} />
                </View>
            </View>
        </ImageBackground>
    );
}

export default Index;
