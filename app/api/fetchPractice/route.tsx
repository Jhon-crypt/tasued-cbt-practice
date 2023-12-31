import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request : Request){

    //fetching api search params
    const { searchParams } = new URL(request.url)
    const adminId : any = searchParams.get("adminId");

    const decoded_adminId = Buffer.from(adminId, 'base64').toString('utf-8');

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    let { data: practice, error }: any = await supabase
    .from("practice")
    .select("*")
    .eq("admin_id", `${decoded_adminId}`)
    .order('id', { ascending: false })

    if(error){

        console.log(error)

    }else{

        if (practice.length === 0) {

            let status = false
    
            return NextResponse.json({ practice, status: status });
    
        } else {
    
            let status = true
    
            return NextResponse.json({ practice, status: status });
        }

    }

//How to count supabase database table col with code

}