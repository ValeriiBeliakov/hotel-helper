import Modal from "../../ui/Modal-v2";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinFormv1";

const AddCabin = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Добавить новый номер</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
      {/* <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}
    </div>
  );
};
// const AddCabin = () => {
//   const [isOpenModal, setOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setOpenModal((show) => !show)}>
//         добавить хижину
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// };

export default AddCabin;
