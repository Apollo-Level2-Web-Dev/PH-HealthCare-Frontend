import PHModal from "@/components/Shared/PHModal/PHModal";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <h1>ABC</h1>
    </PHModal>
  );
};

export default DoctorScheduleModal;
