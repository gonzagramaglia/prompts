'use client';

import { useRouter, useSearchParams  } from "next/navigation";
import { useState, useEffect } from "react";

import Form from "@/components/Form";

const UpdatePrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams(); 
    const promptId = searchParams.get('id');

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        description: '',
        platform: '',
        tag: ''
    })

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                description: data.description,
                platform: data.platform,
                tag: data.tag
            })
        }

        if (promptId) getPromptDetails();
        
    }, [promptId])
    

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if(!promptId) return alert('Prompt ID not found')

        try {
            const response = await fetch(`api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({ 
                    prompt: post.prompt, 
                    description: post.description,
                    platform: post.platform,
                    tag: post.tag 
                })
            }); 

            if(response.ok){
                router.push('/');
            }

        } catch(error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Form 
            type='Update'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
    )
}

export default UpdatePrompt