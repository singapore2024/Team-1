// app/api/order/route.js

import { NextResponse } from 'next/server';
import { todo } from 'node:test';

export async function POST(req) {
    try {
        // Parse the incoming JSON body
        const body = await req.json();

        // Extract order_id and isAccepted from the body
        const { order_id, isAccepted } = body;

        // Validate the fields
        if (typeof order_id !== 'number' || typeof isAccepted !== 'boolean') {
            return NextResponse.json(
                { message: 'Invalid data: order_id should be a number and isAccepted should be a boolean' },
                { status: 400 }
            );
        }

        // Process the data (e.g., save to database or further logic)
        // IF isACCEPT: DO SOMETHING
        // else: DO SOMETHING ELSE


        // For now, we just return the received data
        return NextResponse.json(
            { message: 'Order processed successfully', data: { order_id, isAccepted } },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
    }
}
