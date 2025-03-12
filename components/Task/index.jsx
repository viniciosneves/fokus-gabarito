import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconCheck, IconPencil, IconTrash } from "../Icons";

export const Task = ({ text, onPressEdit, onPressRemove, onToggleComplete, completed = false }) => {
    return (
        <View style={[styles.card, completed && styles.completedCard]}>
            <Pressable onPress={onToggleComplete}>
                <IconCheck checked={completed} />
            </Pressable>
            <Text style={styles.text}>
                {text}
            </Text>
            <Pressable onPress={onPressEdit}>
                <IconPencil />
            </Pressable>
            <Pressable onPress={onPressRemove}>
                <IconTrash />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 8,
        paddingVertical: 18,
        flexDirection: "row",
        gap: 8,
        backgroundColor: "#98A0A8",
        width: "100%",
        alignItems: "center",
        borderRadius: 8,
    },
    completedCard: {
        backgroundColor: "#0F725C",
    },
    text: {
        flexGrow: 1,
        fontSize: 18,
        color: "#000",
    }
});
