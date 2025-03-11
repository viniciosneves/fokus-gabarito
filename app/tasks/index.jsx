import { StyleSheet, View } from "react-native"
import { router } from "expo-router"
import { IconPlus } from "../../components/Icons"
import { Heading } from "../../components/Heading"
import { FokusButton } from "../../components/FokusButton"
import { Task } from "../../components/Task"

export default function Tasks() {

    return (
        <View
            style={styles.container}
        >
            <Heading text="Lista de tarefas:" />

            <View style={{ width: '80%', gap: 40 }}>

                <View style={{ gap: 8 }}>
                    <Task text="Estudar React" completed />
                    <Task text="Estudar React Native" />
                </View>

                <FokusButton 
                    title="Adicionar nova tarefa" 
                    onPress={() => router.push('/task-form')} 
                    icon={<IconPlus />}
                    outline
                />
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
        gap: 32
    }
})