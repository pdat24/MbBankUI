import { FeatureNavigation, HotBadge, StyledText } from '../../components';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import BottomTab from '../../components/BottomTab';
import { BottomTabNavigationType } from '../../utils/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Mbpp({ navigation, route }: BottomTabNavigationType) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.body} scrollsToTop>
                <View style={{ paddingBottom: 120 }}>
                    <FeatureNavigation
                        style={{ marginBottom: 16 }}
                        icon={
                            <HotBadge
                                icon={
                                    <MaterialCommunityIcons
                                        name="sale"
                                        size={28}
                                        color="#002DD2"
                                    />
                                }
                            />
                        }
                        title={'Ưu đãi'}
                    />
                    <FeatureNavigation
                        style={{ marginBottom: 16 }}
                        icon={
                            <HotBadge
                                icon={
                                    <AntDesign
                                        name="shoppingcart"
                                        size={28}
                                        color="#002DD2"
                                    />
                                }
                            />
                        }
                        title={'Mua sắm hoàn tiền'}
                    />
                    <FeatureNavigation
                        style={{ marginBottom: 16 }}
                        icon={
                            <Ionicons
                                name="game-controller-outline"
                                size={28}
                                color="#002DD2"
                            />
                        }
                        title={'Quay ong eMB'}
                    />
                    <Image
                        source={require('../../assets/imgs/mbpp.webp')}
                        resizeMode="contain"
                        style={styles.img}
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
    img: { width: '100%', height: 240, borderRadius: 8 },
});

export default Mbpp;
