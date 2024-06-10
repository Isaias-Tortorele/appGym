import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#67e8f9',
        tabBarInactiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#0F172A',
          paddingTop: 8,
          paddingBottom: 8,
          justifyContent: 'center',
          alignItems: 'center',
          height: '9%',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={30} color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle-outline" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
