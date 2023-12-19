import React from "react";
import MainLayout from "../../UI/MainLayout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <MainLayout>
      Home Child
      <Link to="/">Go Back</Link>
    </MainLayout>
  );
}
