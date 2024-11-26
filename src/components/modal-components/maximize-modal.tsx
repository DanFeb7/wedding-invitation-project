import { Dialog } from "primereact/dialog";
import { ReactNode } from "react";

type MaximizeModalProps = {
  visible: boolean;
  onHide: () => void;
  className?: string;
  content: ReactNode;
  style?: any;
};

const MaximizeModal: React.FC<MaximizeModalProps> = ({
  visible,
  onHide,
  className = "",
  content,
  style,
}) => {
  return (
    <Dialog
      visible={visible}
      style={style}
      className={className}
      onHide={onHide}
      modal
      maximized={true}
      content={({ hide }) => content}
    ></Dialog>
  );
};

export default MaximizeModal;
