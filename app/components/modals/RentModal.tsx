'use client';
import client from "@/app/libs/prismadb";
import useRentModal from "../../hooks/useRentModal";
import Modal from "./Modal";

const RentModal = ( ) => {
  const RentModal = useRentModal();
  return (
    <Modal
      isOpen={RentModal.isOpen}
      onClose={RentModal.onClose}
      onSubmit={RentModal.onClose}
      actionLabel="Submit"
      title="Airbnb your home!"
      />

  );
}

export default RentModal;