// SoundCloudModal.tsx
import React from 'react';
import { Modal } from 'antd';
import { url } from 'inspector';

interface SoundCloudModalProps {
  isOpen: boolean;
  url: string;
  onClose: () => void;
}

const SoundCloudModal: React.FC<SoundCloudModalProps> = ({ isOpen, onClose, url }) => {
  return (
    <Modal
      visible={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width="90%"
      bodyStyle={{ padding: 0 }}
    >
      <iframe
        className="w-full h-screen"
        src={url}
        frameBorder="no"
        allow="autoplay"
        title="SoundCloud Player"
      ></iframe>
    </Modal>
  );
};

export default SoundCloudModal;
