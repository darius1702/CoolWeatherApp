import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Header</Text>
            <Text style={styles.mainContent}>Text here</Text>
            <Button title="Button" />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 25
    },
    header: {
        paddingTop: 20,
        paddingBottom: 20,
        fontWeight: "bold",
        fontSize: 40,
    },
    mainContent: {
        fontSize: 20,
    },
});
