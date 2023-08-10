import { ScrollView, StyleSheet, View } from 'react-native';
import { StyledText, FeatureNavigation } from '../../../components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

function D_otp() {
    return (
        <ScrollView style={lStyles.container}>
            <View style={lStyles.status}>
                <StyledText style={lStyles.statusText}>
                    Trạng thái Digital OTP
                </StyledText>
                <View style={lStyles.statusBagdeWrapper}>
                    <StyledText style={lStyles.statusBagde}>
                        Đã đăng ký
                    </StyledText>
                </View>
            </View>
            <View style={lStyles.navContainer}>
                <FeatureNavigation
                    title="Hướng dẫn sử dụng"
                    message="Hướng dẫn sử dụng"
                    icon={
                        <Entypo
                            name="text-document"
                            size={24}
                            color="#19369E"
                        />
                    }
                />
                <FeatureNavigation
                    title="Xác thực giao dịch bằng Digital OTP"
                    message="Khi giao dịch qua Internet banking hoặc các khi đăng ký Dgital OTP trên thết bị khác"
                    icon={
                        <MaterialCommunityIcons
                            name="line-scan"
                            size={24}
                            color="black"
                        />
                    }
                />
            </View>
        </ScrollView>
    );
}

const lStyles = StyleSheet.create({
    container: {
        padding: 16,
    },
    navContainer: {
        gap: 16,
        paddingBottom: 48,
    },
    statusBagdeWrapper: {
        paddingVertical: 4,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#002DD2',
        backgroundColor: '#fff',
    },
    statusBagde: {
        color: '#000',
        textTransform: 'uppercase',
        fontSize: 12,
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    statusText: {
        color: '#5C5F6D',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default D_otp;
