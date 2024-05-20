export interface GenericModalProps {
  title: string;
  message?: string;
  actionPrimary?: GenericModalAction;
  actionSecondary?: GenericModalAction;
}

export type GenericModalAction = {
  title: string;
  handler: () => void | Promise<void>;
};
