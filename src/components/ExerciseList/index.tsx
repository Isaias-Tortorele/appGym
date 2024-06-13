import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';

export default function ExerciseList({ data }: any) {
  return (
    <View className="mb-4 rounded-3xl bg-gray-200 px-4 shadow-md m-1 shadow-black">
      <View className="w h-16 flex-row items-center justify-between">
        <View className="flex flex-row items-center justify-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage
              source={{
                uri: data.url_gif,
              }}
            />
          </Avatar>
          <Text className='text-lg font-semibold'>{data.title}</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
          {/* <MaterialIcons name="check-circle-outline" size={24} color="black" /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}
