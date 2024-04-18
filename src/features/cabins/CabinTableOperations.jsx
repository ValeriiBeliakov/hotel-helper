import React from "react";
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            label: "Все",
          },
          {
            value: "no-discount",
            label: "Без скидки",
          },
          { value: "with-discount", label: "Со скидкой" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Сортировать (A-Z)" },
          { value: "name-desc", label: "Сортировать (Z-A)" },
          {
            value: "regularPrice-asc",
            label: "Сортировать по цене(сначала дешевые)",
          },
          {
            value: "regularPrice-desc",
            label: "Сортировать по цене(сначала дорогие)",
          },
          {
            value: "maxCapacity-asc",
            label: "Сортировать по вместительности(от малой)",
          },
          {
            value: "maxCapacity-desc",
            label: "Сортировать по вместительности(от большей)",
          },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
