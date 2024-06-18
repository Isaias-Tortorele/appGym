import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, FlatList, Text } from 'react-native';
import Button from '../Button';
import Icon from '@expo/vector-icons/FontAwesome5';
import { cn } from '~/lib/utils';

type MuscleGroup = {
  id: string;
  name: string;
  icon: string;
};

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const muscleGroups: MuscleGroup[] = [
  { id: '1', name: 'abdome', icon: 'user' },
  { id: '2', name: 'aeróbico', icon: 'bicycle' },
  { id: '3', name: 'antebraço', icon: 'hand-paper' },
  { id: '4', name: 'bíceps', icon: 'hand-rock' },
  { id: '5', name: 'costas', icon: 'male' },
  { id: '6', name: 'glúteo', icon: 'female' },
  { id: '7', name: 'ombro', icon: 'user-circle' },
  { id: '8', name: 'panturrilha', icon: 'child' },
  { id: '9', name: 'peito', icon: 'heartbeat' },
  { id: '10', name: 'pernas', icon: 'blind' },
  { id: '11', name: 'trapézio', icon: 'wheelchair' },
  { id: '12', name: 'tríceps', icon: 'thumbs-up' },
];

export default function CustomModal({ visible, onClose, children }: ModalProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((item) => item !== filter)
        : [...prevFilters, filter]
    );
  };

  const clearFilter = () => {
    setSelectedFilters([]);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <View className="flex-1 justify-end bg-black-50">
        <View className="h-2/3 w-full items-center rounded-t-3xl bg-slate-50 pb-10 pt-5 ">
          {children}
          <View className="w-full flex-row items-center justify-center gap-x-14 pl-8">
            <TouchableOpacity onPress={onClose} className="">
              <Icon name="arrow-left" size={25} />
            </TouchableOpacity>
            <Text className="text-center text-2xl">Filtra por grupo muscular</Text>
            <View className="w-5"></View>
          </View>
          <Text className="m-4 text-sm text-text-600">Escolha o(s) ícone(s) abaixo</Text>

          <FlatList
            data={muscleGroups}
            numColumns={4}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="m-2 items-center justify-center">
                <TouchableOpacity
                  onPress={() => toggleFilter(item.name)}
                  className={cn(
                    'min-h-16 min-w-16 items-center justify-center rounded-xl border-2',
                    selectedFilters.includes(item.name) ? 'border-border-800' : 'border-transparent'
                  )}>
                  <Icon name={item.icon} size={25} />
                </TouchableOpacity>
                <Text>{item.name}</Text>
              </View>
            )}
          />

          {selectedFilters[0] && (
            <Button
              titleButton="Limpar filtro"
              onPress={clearFilter}
              className='top-5'
              textStyle="text-md"
              touchableStyle="border-none"
            />
          )}
          <Button
            titleButton="Filtrar"
            className="w-4/5"
            touchableStyle="bg-cyan-400 border-none"
            textStyle="text-white"
          />
        </View>
      </View>
    </Modal>
  );
}
