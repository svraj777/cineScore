import React from "react";
import MoviesList from "./MoviesList";
import Filters from "./Filters";

export default function index() {
  return (
    <>
      <Filters p={5} m={1} justifyContent='flex-end' />
      <MoviesList />
    </>
  );
}
