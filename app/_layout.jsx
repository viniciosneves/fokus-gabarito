import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { TasksProvider } from '../context';

export default function Layout() {
  return (
    <TasksProvider>
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
              title: "",
              headerLeft: () => (
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="#FFFFFF"
                  style={{ marginLeft: 16 }}
                  onPress={() => router.replace('tasks')}
                />
              ),
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </TasksProvider>
  );
}
