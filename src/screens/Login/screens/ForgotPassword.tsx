import { StyleSheet, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { StyledText } from '../../../components';

function ForgotPassword() {
    return (
        <View style={styles.container}>
            <View style={{ flexGrow: 1, flexShrink: 0 }}>
                <TextInput
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    placeholder="Họ và tên"
                />
                <TextInput
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    placeholder="Căn cước công dân"
                    keyboardType="number-pad"
                />
                <TextInput
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    placeholder="Số giấy tờ tùy thân"
                />
                <TextInput
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    placeholder="Số điện thoại"
                    keyboardType="phone-pad"
                />
            </View>
            <TouchableOpacity style={styles.sendBtn}>
                <StyledText style={styles.sendBtnText}>Gửi</StyledText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%',
    },
    input: {
        fontSize: 18,
        color: '#000',
        borderWidth: 1,
        borderColor: '#4F525E',
        borderRadius: 6,
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    sendBtn: {
        padding: 12,
        backgroundColor: '#002DD2',
    },
    sendBtnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ForgotPassword;
