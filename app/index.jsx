
import { Image, StyleSheet, Text, View } from "react-native"
import { FokusButton } from "../components/FokusButton"
import { router } from "expo-router"

export default function Index() {


    return (
        <View
            style={styles.container}
        >
            <Image source={require('../assets/images/logo.png')} />
            <View style={styles.innerContainer}>
                <Text style={styles.text}>
                    Otimize sua{"\n"} produtividade,{"\n"}
                    <Text style={styles.bold}>
                        mergulhe no que{"\n"} importa
                    </Text>
                </Text>
                <Image source={require('../assets/images/home.png')} />
                <FokusButton title="Quero iniciar!" onPress={() => router.navigate('/pomodoro')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#021123',
        gap: 40
    },
    innerContainer: {
        gap: 12
    },
    text: {
        fontSize: 26,
        lineHeight: 39,
        textAlign: 'center',
        color: '#FFF'
    },
    bold: {
        fontWeight: 'bold'
    }
})