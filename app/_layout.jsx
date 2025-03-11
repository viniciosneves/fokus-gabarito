import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: '#021123' },
          headerTintColor: '#FFF',
          drawerStyle: { backgroundColor: '#021123' },
          drawerLabelStyle: { color: "#FFF" },
        }}>
        <Drawer.Screen
          name="index"
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="pomodoro"
          options={{
            drawerLabel: "Timer",
            title: ""
          }}
        />
        <Drawer.Screen
          name="tasks/index"
          options={{
            drawerLabel: "Lista de tarefas",
            title: ""
          }}
        />
        <Drawer.Screen
          name="task-form/index"
          options={{
            drawerItemStyle: { display: "none" },
            title: ""
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
