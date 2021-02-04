import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import MainNav from "../Nav/Nav";

const styles = {
  header: {
    // Dark Blue
    backgroundColor: "#000d1a",
    height: "400px",
    maxWidth: "100%",
  },
};

export default function Header() {
  return (
      <MainNav />
  );
}
