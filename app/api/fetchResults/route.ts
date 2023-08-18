import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request : Request){

    //fetching api search params
    const { searchParams } = new URL(request.url)
    const practiceId : any = searchParams.get("practiceId");

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    try{

        let { data: results, error }: any = await supabase
        .from("results")
        .select("*")
        .eq("practice_id", `${practiceId}`)
        .order('id', { ascending: false })

        if(error){

            console.log(error)

            return NextResponse.json({ error });

        }else{

            return NextResponse.json({ results });

        }

    }catch(error){

        console.log(error)

    }


}