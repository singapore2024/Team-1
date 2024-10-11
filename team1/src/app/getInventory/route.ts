import { supabase } from "../../lib/supabaseClient"

import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const {data, error} = await supabase.from('inventories').select('*');
        console.log("here is inventory data: ", data)
        
        if (error) {
          return NextResponse.json({ error: error.message }, { status: 500 });
        }
    
        return NextResponse.json(data, { status: 200 });
      } catch (err) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
      }
}