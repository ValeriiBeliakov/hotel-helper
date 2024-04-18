import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";

import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { createIsLoading, createMutate } = useCreateCabin();

  const { isEditing, editMutate } = useEditCabin();
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const isWorking = createIsLoading || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession)
      editMutate(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createMutate(
        { ...data, image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }
  function onError(errors) {
    // console.log(errors);
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Название хижины" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "Заполните поле",
            min: {
              value: 1,
              message: "поле имя должно быть заполнено",
            },
          })}
        />
      </FormRow>
      <FormRow label="количество человек" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "Заполните поле",
            min: {
              value: 1,
              message: "поле количество человек должно быть заполнено",
            },
          })}
        />
      </FormRow>
      <FormRow label="цена" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "Заполните поле",
            min: {
              value: 1,
              message: "поле цена должно быть заполнено",
            },
          })}
        />
      </FormRow>
      <FormRow label="скидка" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register("discount", {
            required: "заполните поле скидка",
            validate: (value) =>
              getValues().regularPrice >= value ||
              "Скидка должна быть меньше цены",
          })}
        />
      </FormRow>
      <FormRow label="Описание" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "поле описание должно быть заполнено",
          })}
        />
      </FormRow>

      <FormRow label="Фото">
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession ? false : "Заполните поле",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Сброс
        </Button>
        <Button disabled={createIsLoading}>
          {isEditSession ? "Редактировать" : "Добавить "}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
