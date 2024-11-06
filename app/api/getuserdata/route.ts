import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    try {
        console.log(request.method);
        const { userId } = await auth();

        if (userId) {
            console.log(userId);
            return NextResponse.json({ userId });
        } else {
            return NextResponse.json({ error: 'User ID not found' }, { status: 404 });
        }
    } catch (error) {
        console.error("Error in GET handler:", error);
        return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
    }
}