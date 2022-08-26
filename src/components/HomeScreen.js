import { View, Text } from "react-native";

const HomeScreen = ({naavigation}) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#393B3B', }}>
            <Text style={{ color: 'white', }}>Home Screen</Text>
        </View>
    );
}

export default HomeScreen