import type { GenericModalProps } from "~/components/generic-modal/generic-modal.props";
import GenericModal from "~/components/generic-modal/index.vue";

export const useGenericModal = () => {
  const modal = useModal();

  const openGenericModal = (props: GenericModalProps) => {
    modal.open(GenericModal, { ...props });
  };

  return {
    openGenericModal,
  };
};
