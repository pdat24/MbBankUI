import Entypo from 'react-native-vector-icons/Entypo';
import {
    GestureResponderEvent,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';

interface IGoHomeBtn {
    onPress?: ((event: GestureResponderEvent) => void) & (() => void);
}

function GoHomeBtn({ onPress }: IGoHomeBtn) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Entypo
                name="home"
                size={24}
                style={styles.headerIcon}
                color="#fff"
            />
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    headerIcon: {
        fontSize: 22,
        marginRight: 16,
    },
});

export default GoHomeBtn;
