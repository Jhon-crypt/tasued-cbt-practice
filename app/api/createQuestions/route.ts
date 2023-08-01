import { NextResponse } from "next/server";
import {v4 as uuidv4} from 'uuid';
import { createClient } from "@supabase/supabase-js";

type questions_form_data = {
    question : string,
    optionA : string,
    optionB : string,
    optionC : string,
    optionD : string,
    answer : string,
    practiceId : any
}

export async function POST(request: Request){

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    //fetching create 
    const create_questions_form: questions_form_data = await request.json()
    const { question, optionA, optionB, optionC, optionD, answer, practiceId } = create_questions_form;

    const question_id = uuidv4()

    //inserting test form data into supabase
    const { error } = await supabase
        .from("questions")
        .insert({
            practice_id: `${practiceId}`,
            question_name: `${question}`,
            option_a: `${optionA}`,
            option_b: `${optionB}`,
            option_c: `${optionC}`,
            option_d: `${optionD}`,
            question_id: `${question_id}`,
            answer: `${answer}`
        });

    if (error) {

        console.log(error)

        let status = false

        return NextResponse.json({ message: status });

    } else {

        let status = true

        return NextResponse.json({ message: status});

    } 

}