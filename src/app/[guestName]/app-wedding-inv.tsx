"use client";

import ButtonComp from "@/components/button-components/button-components";
import MaximizeModal from "@/components/modal-components/maximize-modal";
import { useState } from "react";
import { motion } from "motion/react";
import ModalSection from "./modal-section";
import { Show } from "@/auth/show";

type AppWeddingInvitationProps = {
  guestName: string;
};

const AppWeddingInvitation: React.FC<AppWeddingInvitationProps> = ({
  guestName,
}) => {
  const [isDialog, setIsDialog] = useState(true);
  return (
    <>
      <ModalSection
        guestName={guestName}
        visible={isDialog}
        setVisible={setIsDialog}
      />
      <Show>
        <Show.When isTrue={isDialog === false}>
          <motion.div
            className="border-1 border-red-400 bg-green-400"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Hi, This Is Your Invitation
          </motion.div>
        </Show.When>
      </Show>
    </>
  );
};

export default AppWeddingInvitation;
