import * as React from "react";

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction"
});
export const Presenters = ({ persons }) => (<>{formatter.format(persons.map((p) => p.public_name))}</>);
