import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '100%',
        paddingHorizontal: 12,
    },
    scrollContainer: {
        height: '100%',
        overflow: 'scroll',
        paddingTop: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        position: 'relative',
    },
    body: {
        flexGrow: 1,
    },
    left: {
        flexDirection: 'row',
        gap: 4,
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    center: {
        width: '100%',
        position: 'absolute',
        left: 0,
        alignItems: 'center',
        zIndex: -1,
    },
    logo: {
        width: 100,
    },
    updateWord: {
        textTransform: 'uppercase',
        color: '#fff',
    },
    flag: {
        width: 25,
        borderRadius: 100,
        height: 25,
    },
    username: {
        textTransform: 'uppercase',
        fontSize: 28,
        color: '#fff',
        textAlign: 'center',
    },
    beeWrapper: {
        borderRadius: 100000,
        borderWidth: 20,
        borderColor: '#2563eb',
        width: 150,
        height: 150,
    },
    beeImg: {
        borderRadius: 1000,
        width: '100%',
        height: '100%',
        borderWidth: 4,
        borderColor: '#ca8a04',
    },
    beelogoWrapper: {
        position: 'relative',
        alignItems: 'center',
    },
    hiWord: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
    },
    passOptionsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
    },
    passOptions: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    loginBtn: {
        borderRadius: 20,
        backgroundColor: '#22d3ee',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        marginTop: 32,
        marginBottom: 12,
    },
    entry: {
        flex: 1,
        fontSize: 18,
        paddingRight: 16,
    },
    entryWrapper: {
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 28,
    },
    fingerPrint: {
        fontSize: 36,
        marginLeft: 24,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    navLink: {
        flex: 1,
        alignItems: 'center',
    },
    navLinkLabel: {
        textAlign: 'center',
        fontSize: 16,
    },
});
