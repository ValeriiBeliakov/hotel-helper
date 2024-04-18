import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "Все" },
          { value: "checked-out", label: "Выселено " },
          { value: "checked-in", label: "Зарегистрировано" },
          { value: "unconfirmed", label: "Неподтвержден" },
        ]}
      />

      <SortBy
        options={[
          {
            value: "startDate-desc",
            label: "Сортировать по дате(сначала последние)",
          },
          {
            value: "startDate-asc",
            label: "Сортировать по дате(сначала ранние)",
          },
          {
            value: "totalPrice-desc",
            label: "Сортировать по цене(сначала дешевые)",
          },
          {
            value: "totalPrice-asc",
            label: "Сортировать по цене(сначала дорогие)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
