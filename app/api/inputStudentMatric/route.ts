import { NextResponse } from "next/server";
import {v4 as uuidv4} from 'uuid';
import { createClient } from "@supabase/supabase-js";

type input_matric_form_data = {
    matric : any,
    practiceId : string,
}

export async function POST(request: Request){

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    //fetching create 
    const input_matric_form: input_matric_form_data = await request.json()
    const { matric, practiceId } = input_matric_form;

    const student_id = uuidv4()

    //inserting student matric number and others into supabase
    const { error } = await supabase
        .from("results")
        .insert({
            matric_number: `${matric}`,
            practice_id: `${practiceId}`,
            student_id: `${student_id}`
        });

    if (error) {

        console.log(error)

        let status = false

        return NextResponse.json({ message: status });

    } else {

        let status = true

        return NextResponse.json({ message: status });

    } 

}