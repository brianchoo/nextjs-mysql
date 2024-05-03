import { NextResponse } from "next/server";
import db from "@/app/config/db";

export async function GET() {
  try {
    const results = await new Promise((resolve, reject) => {
      db.query(`SELECT * FROM ${process.env.SCHEMA_TABLE}`, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    return NextResponse.json(results);
  } catch (err) {
    return NextResponse.json(
      {
        message: "Failed to fetch data",
      },
      { status: 500 }
    );
  }
}
