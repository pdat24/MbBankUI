import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { StyledText } from '../../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';
import { Dispatch, SetStateAction } from 'react';
import ModalWrapper from './ModalWrapper';

function Recharge({
    visible,
    setVisible,
}: {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}) {
    const moneyCosts = [
        '500,000',
        '200,000',
        '100,000',
        '50,000',
        '30,000',
        '20,000',
        '10,000',
    ];
    return (
        <ModalWrapper
            visible={visible}
            setVisible={setVisible}
            title="Nạp tiền điện thoại">
            <View style={{ height: '100%', position: 'relative' }}>
                <ScrollView style={styles.container}>
                    <View style={styles.phoneInput}>
                        <TextInput
                            style={styles.entry}
                            keyboardType="phone-pad"
                            placeholder="Nhập số điện thoại"
                            placeholderTextColor={'gray'}
                        />
                        <AntDesign name="contacts" size={28} color="#002DD2" />
                    </View>
                    <View>
                        <StyledText style={styles.title}>
                            Chọn mệnh giá
                        </StyledText>
                        <View style={styles.costBlock}>
                            {moneyCosts.map(cost => (
                                <View
                                    style={
                                        cost === '50,000'
                                            ? [
                                                  styles.money,
                                                  styles.choosedCostItem,
                                              ]
                                            : styles.money
                                    }
                                    key={cost}>
                                    <StyledText
                                        style={
                                            cost === '50,000'
                                                ? [
                                                      styles.amount,
                                                      styles.choosedCostText,
                                                  ]
                                                : styles.amount
                                        }>
                                        {cost}
                                        <StyledText
                                            style={
                                                cost === '50,000'
                                                    ? [
                                                          styles.currency,
                                                          styles.choosedCostCurrency,
                                                      ]
                                                    : styles.currency
                                            }>
                                            VND
                                        </StyledText>
                                    </StyledText>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View>
                        <StyledText style={styles.title}>
                            Hóa đơn gần đây
                        </StyledText>
                        <View>
                            <View style={styles.bill}>
                                <StyledText style={styles.tel}>
                                    04729457295
                                </StyledText>
                                <StyledText style={styles.label}>
                                    Nạp tiền điện thoại
                                </StyledText>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.sendBtn}>
                        <StyledText style={styles.sendBtnText}>
                            Tiếp tục
                        </StyledText>
                    </TouchableOpacity>
                </View>
            </View>
        </ModalWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 32,
        paddingHorizontal: 20,
    },
    title: {
        color: '#52525b',
        fontSize: 18,
        marginBottom: 16,
        marginTop: 36,
    },
    phoneInput: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'gray',
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    entry: {
        flex: 1,
        fontSize: 18,
        color: '#000',
        paddingRight: 20,
    },
    currency: {
        color: 'gray',
        fontSize: 12,
    },
    money: {
        minHeight: 72,
        width: 105,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    amount: {
        fontSize: 18,
        color: '#002DD2',
        fontWeight: 'bold',
    },
    costBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    bill: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        padding: 16,
    },
    tel: {
        fontSize: 14,
        color: 'gray',
    },
    label: {
        fontSize: 16,
        marginTop: 4,
        color: '#52525b',
        textTransform: 'uppercase',
    },
    bottom: {
        position: 'absolute',
        width: '100%',
        padding: 16,
        backgroundColor: '#fff',
        elevation: 8,
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
    choosedCostItem: {
        backgroundColor: '#002DD2',
    },
    choosedCostText: {
        color: '#fff',
    },
    choosedCostCurrency: {
        color: '#f97316',
    },
});

export default Recharge;
