import * as React from "react";

const dayFormatter = new Intl.DateTimeFormat("en-AU", { weekday: "long" });
export const DayName = ({ date }) => <>{dayFormatter.format(date)}</>;
