import {
    Image,
    Pressable,
    ScrollView,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { StyledText } from '../../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dispatch, SetStateAction } from 'react';
import ModalWrapper from './ModalWrapper';
import Feather from 'react-native-vector-icons/Feather';

function User({ name, tel }: { name: string; tel: string }) {
    const lStyles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBlockColor: '#e5e7eb',
            paddingVertical: 20,
        },
        left: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
        },
        logo: {
            width: 32,
            height: 50,
        },
        name: {
            textTransform: 'uppercase',
            color: '#000',
            fontSize: 18,
        },
        text: {
            color: '#9ca3af',
        },
    });
    return (
        <View style={lStyles.container}>
            <View style={lStyles.left}>
                <Image
                    resizeMode="contain"
                    style={lStyles.logo}
                    source={require('../../../assets/imgs/Login/MB_Military_Bank_logo.png')}
                />
                <View>
                    <StyledText fontStyle="Black" style={lStyles.name}>
                        {name}
                    </StyledText>
                    <StyledText style={lStyles.text}>{tel}</StyledText>
                    <StyledText style={lStyles.text}>Quân Đội (MB)</StyledText>
                </View>
            </View>
            <Pressable>
                <Feather name="more-horizontal" size={24} color="black" />
            </Pressable>
        </View>
    );
}

function SendMoney({
    visible,
    setVisible,
}: {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <ModalWrapper
            visible={visible}
            setVisible={setVisible}
            title="Chuyển tiền">
            <View style={{ minHeight: '100%' }}>
                <View style={{ padding: 20 }}>
                    <View style={styles.firstBlock}>
                        <TouchableOpacity
                            style={[styles.item, { width: '47%' }]}>
                            <MaterialCommunityIcons
                                name="line-scan"
                                size={28}
                                color="#002DD2"
                            />
                            <StyledText style={styles.title}>
                                Quét QR
                            </StyledText>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.item, { width: '47%' }]}>
                            <Fontisto
                                name="bitcoin"
                                size={28}
                                color="#002DD2"
                            />
                            <StyledText style={styles.title}>
                                Giao dịch tách lệnh
                            </StyledText>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.item}>
                        <Ionicons
                            name="person-add-outline"
                            size={28}
                            color="#002DD2"
                        />
                        <StyledText style={styles.title}>
                            Người thụ hưởng mới
                        </StyledText>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.type}>
                        <TouchableOpacity
                            style={[styles.typeItem, styles.typeItemActive]}>
                            <StyledText
                                style={[
                                    styles.typeTitle,
                                    styles.typeTitleActive,
                                ]}>
                                STK đã lưu
                            </StyledText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.typeItem}>
                            <StyledText style={styles.typeTitle}>
                                Gần đây
                            </StyledText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.typeItem}>
                            <StyledText style={styles.typeTitle}>
                                Mẫu giao dịch
                            </StyledText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchbar}>
                        <AntDesign name="search1" size={24} color="black" />
                        <TextInput
                            style={styles.entry}
                            placeholderTextColor={'#a3a3a3'}
                            placeholder="Tìm tên người thụ hưởng"
                        />
                    </View>
                    <ScrollView>
                        <User name="pham quoc dat" tel="04729418341" />
                    </ScrollView>
                </View>
            </View>
        </ModalWrapper>
    );
}

const styles = StyleSheet.create({
    item: {
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
        elevation: 4,
        shadowColor: '#7E7F87',
        gap: 16,
        minHeight: 60,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
        flex: 1,
    },
    firstBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    bottom: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 16,
    },
    type: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    typeTitle: {
        color: '#a3a3a3',
        fontSize: 16,
        fontWeight: 'bold',
    },
    typeItem: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#d4d4d4',
    },
    typeTitleActive: {
        color: '#002DD2',
    },
    typeItemActive: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#002DD2',
    },
    searchbar: {
        borderRadius: 8,
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
        paddingHorizontal: 16,
        paddingVertical: 2,
    },
    entry: {
        fontSize: 18,
        paddingHorizontal: 16,
        color: '#000',
    },
});

export default SendMoney;
