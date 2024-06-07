import React, { useEffect } from "react";
import Content from "../../Job Provider/Components/Report/content/Content";
import Config from "../../config/Config.json";

export default function ReportsPage() {
  useEffect(() => {
    document.title = Config.TITLE.REPORTS;
  }, []);
  return (
    <React.Fragment>
      <Content />
    </React.Fragment>
  );
}
