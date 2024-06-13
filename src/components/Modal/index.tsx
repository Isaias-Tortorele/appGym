import React from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function CustomModal({ visible, onClose, children }: ModalProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View className="bg-black-50 flex-1 justify-end bg-slate-950">
        <View className="h-3/5 w-full items-center rounded-t-3xl bg-slate-50 p-5">
          {children}
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

CustomModal;
