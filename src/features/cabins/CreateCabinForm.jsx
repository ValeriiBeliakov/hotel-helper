import toast from "react-hot-toast";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();
  const { isLoading: createIsLoading, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("новая секция успешно добавлена");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }
  function onError(errors) {
    // console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Название хижины" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={createIsLoading}
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
          disabled={createIsLoading}
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
          disabled={createIsLoading}
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
          disabled={createIsLoading}
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
          disabled={createIsLoading}
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
          disabled={createIsLoading}
          {...register("image", {
            required: "Заполните поле",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Сброс
        </Button>
        <Button disabled={createIsLoading}>Добавить</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
