import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Paweennut Prohsoontorn",
    studentId: "650610783",
  });
};
