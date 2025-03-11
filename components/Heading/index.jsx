import { StyleSheet, Text } from "react-native"

export const Heading = ({text}) => {
    return (
        <Text style={styles.heading}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: '#FFFFFF',
        fontSize: 26,
        textAlign: 'center'
    }
})