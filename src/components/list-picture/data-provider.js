import React from "react";
import { useParams, useHistory } from "react-router-dom";

import PictureDialog from "../picture";

export const DataProvider = ({ children }) => {
  let { id } = useParams();
  const history = useHistory();

  const onCloseDialog = () => history.push("/");

  return (
    <>
      <PictureDialog open={!!id} id={id} onClose={onCloseDialog} />

      {children}
    </>
  );
};

export default DataProvider;
