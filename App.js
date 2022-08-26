import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Workout() {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>workout Screen</Text>
    </View>
  );
}

function Measure() {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>Measure Screen</Text>
    </View>
  );
}

function Routine() {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>Routine Screen</Text>
    </View>
  );
}

function History() {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>History Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          //TODO: Replace these icons, adjust color scheme, check doc for themes
          //TODO: Fix icons from turning dark
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-person'
                : 'person';
            } else if (route.name === 'History') {
              iconName = 'calendar';
            } else if (route.name === 'Workout') {
              iconName = 'walk';
            } else if (route.name === 'Routine') {
              iconName = 'fitness';
            } else if (route.name === 'Measure') {
              iconName = 'book';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: 'gray',
          },
          tabBarActiveTintColor: '#F3D156',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#393B3B' },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Profile' }}/>
        <Tab.Screen name="History" component={History} options={{ title: 'History' }}/>
        <Tab.Screen name="Workout" component={Workout} options={{ title: 'Workout' }}/>
        <Tab.Screen name="Routine" component={Routine} options={{ title: 'Routine' }}/>
        <Tab.Screen name="Measure" component={Measure} options={{ title: 'Measure' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  base: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#393B3B',
  },
  text: {
    color: 'white'
  }
});
