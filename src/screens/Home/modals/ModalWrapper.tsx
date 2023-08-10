import { Dispatch, ReactElement, SetStateAction } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Header } from '../../../components';

interface IModalWrapper {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    title: string;
    children: ReactElement;
    homeIcon?: boolean;
}
function ModalWrapper({
    visible,
    setVisible,
    title,
    children,
    homeIcon = true,
}: IModalWrapper) {
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Header
                        title={title}
                        setVisiable={setVisible}
                        homeIcon={homeIcon}
                    />
                </View>
                <View style={{ paddingTop: 65 }}>{children}</View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        minHeight: '100%',
        position: 'relative',
    },
    headerWrapper: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 65,
    },
});

export default ModalWrapper;
