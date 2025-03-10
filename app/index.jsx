import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View>
            <Text>
                Home
            </Text>
            <Link href={{ pathname: '/pomodoro' }}>
                Quero iniciar!
            </Link>
        </View>
    )
}