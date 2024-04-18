import React from "react";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

const Stats = ({ bookings, confirmed, numDays, cabinCount }) => {
  // 1
  const numBookings = bookings?.length;
  // 2
  const sales = bookings?.reduce((acc, curr) => acc + curr.totalPrice, 0);
  // 3
  const checkins = confirmed.length;
  // 4
  const occupation =
    confirmed.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        title="Бронирование"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Продажи"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={`${sales}₽`}
      />
      <Stat
        title="Регистрация"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Уровень заполненности"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
};

export default Stats;
