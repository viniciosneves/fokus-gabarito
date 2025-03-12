import { FlatList, StyleSheet, View } from "react-native"
import { router } from "expo-router"
import { IconPlus } from "../../components/Icons"
import { Heading } from "../../components/Heading"
import { FokusButton } from "../../components/FokusButton"
import { Task } from "../../components/Task"
import { useTaskContext } from "../../context/useTaskContext"

export default function Tasks() {

    const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext()

    return (
        <View
            style={styles.container}
        >
            <View style={{ width: '80%', gap: 40 }}>

                {/* <View style={{ gap: 8 }}>
                    {tasks.map(t => (
                        <Task key={t.id} text={t.description} completed={t.completed} />
                    ))}
                </View> */}

                <FlatList
                    ListHeaderComponent={<View style={{ marginBottom: 16 }}>
                        <Heading text="Lista de tarefas:" />
                    </View>}
                    data={tasks}
                    renderItem={
                        ({ item }) => <Task
                            key={item.id}
                            text={item.description}
                            completed={item.completed}
                            onPressRemove={() => deleteTask(item.id)}
                            onToggleComplete={() => toggleTaskCompleted(item.id)}
                        />
                    }
                    keyExtractor={t => t.id}
                    ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                    ListFooterComponent={<View style={{ marginTop: 16 }}>
                        <FokusButton
                            title="Adicionar nova tarefa"
                            onPress={() => router.push('/task-form')}
                            icon={<IconPlus />}
                            outline
                        />
                    </View>}
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