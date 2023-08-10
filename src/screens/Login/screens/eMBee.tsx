import { Image, StyleSheet, View, ScrollView } from 'react-native';
import { StyledText } from '../../../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

function E_MBee() {
    const categories = [
        {
            icon: (
                <AntDesign name="questioncircleo" size={28} color="#002DD2" />
            ),
            title: 'Câu hỏi thường gặp',
        },
        {
            icon: (
                <Ionicons
                    name="shield-checkmark-outline"
                    size={28}
                    color="#002DD2"
                />
            ),
            title: 'Tra soát giao dịch',
        },
        {
            icon: <AntDesign name="shoppingcart" size={28} color="#002DD2" />,
            title: 'Tư vấn sản phẩm',
        },
        {
            icon: (
                <MaterialIcons name="support-agent" size={28} color="#002DD2" />
            ),
            title: 'Hỗ trợ khách hàng',
        },
    ];
    return (
        <ScrollView style={styles.container}>
            <View style={{ paddingBottom: 50 }}>
                <View>
                    <StyledText style={styles.title}>
                        Hãy để eMBee hỗ trợ bạn
                    </StyledText>
                    <View style={styles.categoryWrapper}>
                        {categories.map((category, index) => (
                            <View key={index} style={styles.categoryItem}>
                                <View style={styles.categoryBlock}>
                                    {category.icon}
                                    <StyledText style={styles.categoryTitle}>
                                        {category.title}
                                    </StyledText>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <View>
                    <StyledText style={[styles.title, { marginBottom: 16 }]}>
                        Yêu cầu của bạn
                    </StyledText>
                    <View>
                        <Image
                            source={require('../../../assets/imgs/Login/eMBeeimg.webp')}
                            alt="img"
                            resizeMode="cover"
                            style={{ width: '100%' }}
                        />
                        <StyledText
                            style={{
                                color: 'gray',
                                textAlign: 'center',
                                marginTop: 12,
                            }}>
                            Hiện chưa có yêu cầu
                        </StyledText>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        width: '100%',
        fontSize: 22,
    },
    categoryBlock: {
        elevation: 4,
        borderRadius: 6,
        borderLeftWidth: 6,
        borderLeftColor: '#002DD2',
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 16,
        overflow: 'hidden',
        alignItems: 'center',
        gap: 16,
        flexDirection: 'row',
        minHeight: 100,
    },
    categoryTitle: {
        color: '#000',
        fontSize: 16,
        flex: 1,
    },
    categoryWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 24,
    },
    categoryItem: {
        width: '48%',
        marginBottom: 16,
    },
});

export default E_MBee;
