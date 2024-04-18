import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: { minBookingLength, maxBooking, maxGuests, breakfastPrice } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Минимальное количество ночей/бронирование">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>

      <FormRow label="Максимальное количество ночей/бронирование">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBooking")}
        />
      </FormRow>

      <FormRow label="Максимальное количество гостей/бронирование">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuests}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuests")}
        />
      </FormRow>

      <FormRow label="Стоимость завтрака">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
