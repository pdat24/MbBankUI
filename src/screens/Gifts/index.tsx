import { FeatureNavigation, HotBadge, StyledText } from '../../components';
import { ScrollView, StyleSheet, View } from 'react-native';
import BottomTab from '../../components/BottomTab';
import { BottomTabNavigationType } from '../../utils/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Gifts({ navigation, route }: BottomTabNavigationType) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
                <View style={{ paddingBottom: 120 }}>
                    <FeatureNavigation
                        style={{ marginBottom: 16 }}
                        icon={
                            <HotBadge
                                icon={
                                    <MaterialCommunityIcons
                                        name="calculator-variant-outline"
                                        size={28}
                                        color="#002DD2"
                                    />
                                }
                            />
                        }
                        title={'Tích điểm thưởng'}
                    />
                    <FeatureNavigation
                        style={{ marginBottom: 16 }}
                        icon={
                            <HotBadge
                                icon={
                                    <FontAwesome
                                        name="credit-card-alt"
                                        size={24}
                                        color="#002DD2"
                                    />
                                }
                            />
                        }
                        title={'Đổi quà tặng'}
                    />
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

export default Gifts;
