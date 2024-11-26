import MaximizeModal from "@/components/modal-components/maximize-modal";
import { useState } from "react";
import { Satisfy } from "next/font/google";
import { IBM_Plex_Serif } from "next/font/google";
import ButtonComp from "@/components/button-components/button-components";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"], // Customize the weights you need
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
});

type ModalSectionProps = {
  guestName: string;
  visible: boolean;
  setVisible: (value: boolean) => void;
};

const ModalSection: React.FC<ModalSectionProps> = ({
  guestName,
  visible,
  setVisible,
}) => {
  return (
    <MaximizeModal
      style={{
        backgroundImage: "url(assets/dummy_pic.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      visible={visible}
      onHide={() => setVisible(false)}
      content={
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          className="w-screen h-screen"
        >
          <div style={{ height: "50%" }} className={`${satisfy.className}`}>
            <div className="mt-7 text-center text-white text-7xl">
              Man & Woman
            </div>
          </div>
          <div
            style={{ height: "50%" }}
            className="flex flex-column justify-content-end pb-8 text-white"
          >
            <div className="text-center flex flex-column gap-1">
              <div className="text-base font-light">Dear,</div>
              <div className={`${ibmPlexSerif.className} text-4xl mb-2`}>
                {guestName}
              </div>
              <div>
                <ButtonComp
                  icon={"pi pi-envelope"}
                  buttonType={"outlined"}
                  severity={"secondary"}
                  label="Open Invitation"
                  className="text-white w-7 border-round-3xl outline-none"
                  onClick={(e) => {
                    setVisible(false);
                  }}
                />
              </div>
              <div className="font-light text-xs mt-2 mb-6">
                Apologize if there any mistakes in the spelling name.
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ModalSection;
