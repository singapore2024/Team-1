import { NextResponse } from "next/server";
import { supabase } from "../../lib/supabaseClient";

export async function GET() {
    try {
        const {data, error} = await supabase.from('orders').select('*')
        .eq('status', 'RECEIVED');;
        console.log("here is recieved orders data:  ", data)
        
        if (error) {
          return NextResponse.json({ error: error.message }, { status: 500 });
        }
    
        return NextResponse.json(data, { status: 200 });
      } catch (err) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
      }
}