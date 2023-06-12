'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Form from "@/components/Form";

const createPrompt = () => {

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        description: '',
        platform: '',
        tag: ''
    })

    const createPrompt = async (e) => {

    }

    return (
        <Form 
            type='Create'
            post={post}
            setPost={setPost}
            submitting={submitting}
        />
    )
}

export default createPrompt