import React, { FC, useEffect, useState } from "react";

// components
import { Modal, useModal, ModalWithBackground } from ".";

// types
import { ModalProps } from "./types";

// components
import { Button, ButtonVariants } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { ModalV2, useModalV2 } from "./ModalV2";
import { BodyText } from "../../components/Typography";

export default {
  title: "Widgets/Modal",
  component: Modal,
  argTypes: {},
};

const CustomModal: FC<ModalProps> = ({ title, onDismiss, ...props }) => (
  <Modal title={title} onDismiss={onDismiss} {...props}>
    <Heading>{title}</Heading>
    <Text>closeOnOverlayClick</Text>
    <Button>This button Does nothing</Button>
  </Modal>
);

export const Default: FC = () => {
  const modalV2 = useModalV2();
  const modalExtendedV2 = useModalV2();

  const [onPresent1] = useModal(
    <Modal title={"title v1"}>
      <Heading>title</Heading>
      <Text>closeOnOverlayClick</Text>
      <Button onClick={() => modalV2.onOpen()}>This button opens v2 modal</Button>
    </Modal>,
    true
  );
  const [onPresent2] = useModal(<CustomModal title="Modal 2" />, false, false, "second");
  const [onPresent3] = useModal(<CustomModal title="Modal 3" />, false, false, "third");

  return (
    <div>
      <Button onClick={onPresent1}>Open modal 1</Button>
      <Button onClick={onPresent2}>Open modal 2</Button>
      <Button onClick={onPresent3}>Open modal with background</Button>

      <ModalV2 closeOnOverlayClick {...modalV2}>
        <Modal title="title v2">
          <Button onClick={() => modalExtendedV2.onOpen()}>This button opens extended v2 modal</Button>
          <BodyText> TEST V2 MODAL </BodyText>
        </Modal>
      </ModalV2>
      <ModalV2 closeOnOverlayClick {...modalExtendedV2}>
        <ModalWithBackground hideCloseButton>
          <BodyText> TEST extended V2 MODAL </BodyText>
        </ModalWithBackground>
      </ModalV2>
    </div>
  );
};

export const WithBackground: FC = () => {
  const CustomBackgroundModal: FC<ModalProps> = ({ title, onDismiss }) => {
    return (
      <Modal title={title} modalBackground="secondary" onDismiss={onDismiss} maxWidth="400px">
        Modal body text
      </Modal>
    );
  };

  const [onPresent1] = useModal(<CustomBackgroundModal title="Modal with custom background" />);

  return <Button onClick={onPresent1}>Modal with custom background</Button>;
};

export const WithCustomWidth: FC = () => {
  const CustomWidthModal: FC<ModalProps> = ({ title, onDismiss }) => {
    return (
      <Modal title={title} onDismiss={onDismiss} maxWidth="400px">
        Modal body text
      </Modal>
    );
  };

  const [onPresent1] = useModal(<CustomWidthModal title="Modal with custom width and test very long title text" />);

  return <Button onClick={onPresent1}>Modal with custom width</Button>;
};

export const DisableOverlayClick: FC = () => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />, false);

  return (
    <div>
      <Button onClick={onPresent1}>Disabled overlay click</Button>
    </div>
  );
};

export const WithBackButton: FC = () => {
  const BackButtonModal: FC<ModalProps> = ({ title, onDismiss }) => {
    const handleOnBack = () => {
      return 1;
    };

    return (
      <Modal title={title} onDismiss={onDismiss} onBack={handleOnBack} hideCloseButton>
        <Button onClick={onDismiss} variant={ButtonVariants.TEXT}>
          Consumer can still close it.
        </Button>
      </Modal>
    );
  };

  const [onPresent1] = useModal(<BackButtonModal title="Modal with no X" />, false);

  return <Button onClick={onPresent1}>Only Back Button</Button>;
};

export const ReactingToOusideChanges: FC = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const ReactiveModal: FC<ModalProps & { count: number }> = ({ title, count, onDismiss }) => {
    return (
      <Modal title={title} onDismiss={onDismiss}>
        <h2>Counter: {count}</h2>
        <Button mt="8px" onClick={onDismiss}>
          Close
        </Button>
      </Modal>
    );
  };

  const [onPresent1] = useModal(
    <ReactiveModal title={`[${counter}] Modal that reacts to outside change`} count={counter} />,
    true,
    true,
    "reactiveModal"
  );
  const [onPresent2] = useModal(
    <ReactiveModal title={`[${counter}] Modal that does NOT react to outside change`} count={counter} />
  );

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <Button onClick={onPresent1}>Reactive modal</Button>
      <Button ml="16px" onClick={onPresent2}>
        Non-reactive modal
      </Button>
    </div>
  );
};
