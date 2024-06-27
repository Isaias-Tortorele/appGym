import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, FlatList, Text } from 'react-native';
import { Button } from '../Button';
import Icon from '@expo/vector-icons/FontAwesome5';
import { cn } from '~/lib/utils';

type MuscleGroupProps = {
  id: string;
  name: string;
  icon: string;
};

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  onFilter: (filters: string[]) => void;
  children?: React.ReactNode;
}

const muscleGroups: MuscleGroupProps[] = [
  { id: 'abdominal', name: 'Abdômen', icon: 'user' },
  { id: 'cardio', name: 'Aeróbico', icon: 'bicycle' },
  { id: 'antebraco', name: 'Antebraço', icon: 'hand-paper' },
  { id: 'biceps', name: 'Bíceps', icon: 'hand-rock' },
  { id: 'costas', name: 'Costas', icon: 'male' },
  { id: 'gluteo', name: 'Glúteo', icon: 'female' },
  { id: 'ombro', name: 'Ombro', icon: 'user-circle' },
  { id: 'panturrilha', name: 'Panturrilha', icon: 'child' },
  { id: 'peito', name: 'Peito', icon: 'heartbeat' },
  { id: 'perna', name: 'Perna', icon: 'blind' },
  { id: 'trapezio', name: 'Trapézio', icon: 'wheelchair' },
  { id: 'triceps', name: 'Tríceps', icon: 'thumbs-up' },
];

export default function CustomModal({ visible, onClose, onFilter, children }: ModalProps) {
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

  const handleFilter = () => {
    onFilter(selectedFilters);
    onClose();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <View className="flex-1 justify-end bg-black-50">
        <View className="h-4/6 items-center rounded-t-3xl bg-slate-50 pb-10 pt-5">
          {children}
          <View className="flex-row items-center justify-center gap-x-12">
            <TouchableOpacity onPress={onClose}>
              <Icon name="arrow-left" size={25} />
            </TouchableOpacity>
            <Text className="text-xl font-semibold">Filtra por grupo muscular</Text>
            <View className="w-4" />
          </View>
          <Text className="m-4 text-sm text-text-600">Escolha o(s) ícone(s) abaixo</Text>

          <FlatList
            data={muscleGroups}
            numColumns={4}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="m-2 items-center justify-center">
                <TouchableOpacity
                  onPress={() => toggleFilter(item.id)}
                  className={cn(
                    'min-h-16 min-w-16 items-center justify-center rounded-xl border-2',
                    selectedFilters.includes(item.id) ? 'border-border-800' : 'border-transparent'
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
              className="top-5 h-7"
              textStyle="text-md text-text-600"
              touchableStyle="border-none"
            />
          )}
          <Button
            titleButton="Filtrar"
            className="w-4/5"
            touchableStyle="bg-cyan-400 border-none"
            textStyle="text-white"
            onPress={handleFilter}
          />
        </View>
      </View>
    </Modal>
  );
}