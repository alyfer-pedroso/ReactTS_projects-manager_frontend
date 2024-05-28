import { Routes, Route } from "react-router-dom";
import * as P from "@/pages";

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<P.Login />} />
      <Route path="/Login" element={<P.Login />} />
    </Routes>
  );
}
