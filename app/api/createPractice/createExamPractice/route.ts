import { NextResponse } from "next/server";
import {v4 as uuidv4} from 'uuid';
import { createClient } from "@supabase/supabase-js";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

type exam_form_data = {
    courseCode? : string,
    level?: string,
    timeLimit?:string
}

export async function POST(request : Request){

    //fetching signed in admin session from kinde auth
    const {getUser} = getKindeServerSession();
    const admin = getUser();

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    //fetching exam form data
    const exam_form: exam_form_data = await request.json();
    const { courseCode, level, timeLimit } = exam_form;

    const practice_id = uuidv4();

    //inserting test form data into supabase
    const { error } = await supabase
        .from("practice")
        .insert({
            admin_name: `${admin.given_name}_${admin.family_name}`,
            admin_id: `${admin.id}`,
            practice_type: "exam",
            practice_id: `${practice_id}`,
            course_code: `${courseCode}`,
            level: `${level}`,
            time_limit: `${timeLimit}`
        });

    if (error) {

        let status = false

        return NextResponse.json({ message: status });

    } else {

        let status = true

        return NextResponse.json({ message: status, practiceId: practice_id });

    }

}