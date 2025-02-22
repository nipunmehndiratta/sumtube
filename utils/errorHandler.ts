import { NextResponse } from "next/server";

export const handleError = (message: string, statusCode: number) => {
    return NextResponse.json({ status: false, message }, { status: statusCode });
}