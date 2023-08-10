import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { FeatureNavigation } from '../../../components';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Utilities() {
    return (
        <ScrollView style={lStyles.container}>
            <View style={lStyles.navContainer}>
                <FeatureNavigation
                    title="Định danh tài khoản Online"
                    icon={
                        <SimpleLineIcons
                            name="screen-smartphone"
                            size={24}
                            color="#19369E"
                        />
                    }
                />
                <FeatureNavigation
                    title="Trợ giúp thẻ"
                    icon={
                        <FontAwesome
                            name="credit-card-alt"
                            size={20}
                            color="#19369E"
                        />
                    }
                />
                <FeatureNavigation
                    title="Thông báo biến động số dư"
                    icon={
                        <MaterialCommunityIcons
                            name="bell-badge"
                            size={24}
                            color="#19369E"
                        />
                    }
                />
                <FeatureNavigation
                    title="Quản lý VietQR"
                    icon={
                        <MaterialCommunityIcons
                            name="qrcode-scan"
                            size={24}
                            color="#19369E"
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
});

export default Utilities;
