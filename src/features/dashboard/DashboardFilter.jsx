import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "последние 7 дней" },
        { value: "30", label: "последние 30 дней" },
        { value: "90", label: "последние 90 дней" },
      ]}
    />
  );
}

export default DashboardFilter;
