import { TouchableOpacity } from 'react-native-gesture-handler';
import StyledText from './StyledText';
import { StyleSheet } from 'react-native';

function CommonBtn1({ title, ...args }: { title: string }) {
    return (
        <TouchableOpacity style={styles.sendBtn} {...args}>
            <StyledText style={styles.sendBtnText}>{title}</StyledText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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

export default CommonBtn1;
