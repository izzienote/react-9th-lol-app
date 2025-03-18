import { fetchLatestVersion } from "@/utils/serverApi";
import React from "react";

const Test = () => {
  const version = fetchLatestVersion();

  return (
    <div>
      Test<div>{version}</div>
    </div>
  );
};

export default Test;
