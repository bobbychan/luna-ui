import { modal } from '@alice-ui/theme';
import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalProps } from '.';
import { Button } from '../button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', 'full'],
    },
    radius: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg'],
    },
    backdrop: {
      control: {
        type: 'select',
      },
      options: ['transparent', 'blur', 'opaque'],
    },
    isDismissable: {
      control: {
        type: 'boolean',
      },
    },
    isKeyboardDismissDisabled: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen w-screen items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const defaultProps: ModalProps = {
  ...modal.defaultVariants,
};

const Template = (args: ModalProps) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open dialog</Button>
      <Modal {...args} isDismissable isOpen={isOpen} onOpenChange={setOpen}>
        <ModalContent>
          {({ close }) => (
            <>
              <ModalHeader>Notice</ModalHeader>
              <ModalBody>
                <p>Click outside to close this dialog.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={close}>
                  Close
                </Button>
                <Button color="primary" onPress={close}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: Template,

  args: {
    ...defaultProps,
    backdrop: 'blur',
  },
};
