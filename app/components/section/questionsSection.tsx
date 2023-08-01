"use client"
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import LoaderSection from './loaderSection'

export default function QuestionSection(props: {id: any}){

    // connecting to supabase
    const supabaseUrl : any = process.env.NEXT_PUBLIC_SUPABASE_URL 
    const supabaseAnonKey : any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const [loading, setLoading] = useState(false)

    const [deleteLoading, setDeleteLoading] = useState(false)

    const [questions, setQuestions]: any = useState([])

    useEffect(() => {

        async function getQuestions(){

            try {

                setLoading(true)

                let { data: question, error }: any = await supabase
                    .from("questions")
                    .select("*")
                    .eq("practice_id", `${props.id}`)

                if(question){

                    setLoading(false)

                    setQuestions(question)

                }else{

                    //console.log(error)

                }

            }catch(error){

                console.log(error)

            }

        }

        getQuestions()

    }, [])

    useEffect(() => {

        const questionsListener = supabase
            .channel('any')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'questions' }, payload => {
                const newQuestion = payload.new;
                setQuestions((oldQuestion: any) => {
                    const newQuestions = [...oldQuestion, newQuestion];
                    newQuestions.sort((a, b) => b.id - a.id);
                    return newQuestions;
                });
            })
            .subscribe()

        return () => {

            supabase.removeChannel(questionsListener)

        };

    }, [])

    const deleteQuestion = async (question_id : any) => {

        try {

            setDeleteLoading(true)

            const { error } = await supabase
                .from('questions')
                .delete()
                .eq('question_id', `${question_id}`)

            if(error){

                setDeleteLoading(false)

            }else{

                setDeleteLoading(false)

                setQuestions(questions.filter((x: any) => x.id != question_id))

            }

        }catch(error){

            console.log(error)

        }

    }

    return (

        <>
         
            <section className="py-8">
                <div className="container px-4 mx-auto">

                    {loading?

                        <>
                        
                            <LoaderSection />
                        
                        </>

                        :

                        <>
                        
                            <div className="flex flex-wrap -m-4">

                                {questions.map((question: any) => (

                                    <div className="w-full lg:w-1/2 p-4" key={question.id}>
                                        <div className="p-6 bg-white shadow rounded">

                                            <h2 className="card-title">{question.question_name}</h2>

                                            <div className="form-control">
                                                <label className="label cursor-pointer">
                                                    <span className="label-text">A.{question.option_a}</span>
                                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                                </label>
                                            </div>
                                            <div className="form-control">
                                                <label className="label cursor-pointer">
                                                    <span className="label-text">B. {question.option_b}</span>
                                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                                </label>
                                            </div>

                                            <div className="form-control">
                                                <label className="label cursor-pointer">
                                                    <span className="label-text">C. {question.option_c}</span>
                                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                                </label>
                                            </div>

                                            <div className="form-control">
                                                <label className="label cursor-pointer">
                                                    <span className="label-text">D. {question.option_d}</span>
                                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                                </label>
                                            </div>

                                            <div className="flex items-center mt-3">

                                                <button className="btn mr-3">
                                                    Answer : {question.answer}
                                                </button>

                                                <button onClick={() => deleteQuestion(question.question_id)} className="btn btn-error">
                                                    Delete question
                                                </button>

                                            </div>

                                        </div>
                                    </div>

                                ))}

                            </div>

                        </>

                    }


                </div>
            </section>


        </>

    )            

}