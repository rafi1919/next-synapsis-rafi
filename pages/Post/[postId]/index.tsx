import React, { useState, useEffect } from 'react';
import PostDetailView from './view';
import { useRouter } from 'next/router';
import { useGetCommentsData, useGetBlogData,} from '@/hooks';

export default function Index() {
    const router = useRouter();
    const postId = router.query.postId as string;
    const [postData, setPostData] = useState<any>({});
    const { data: commentsData, loading: commentsLoading } = useGetCommentsData({ postId: postId as string });
    const { data: blogData, loading: blogLoading } = useGetBlogData();

    useEffect(() => {
        if (blogData ) {
            const post = blogData.find((post: any) => post.id === parseInt(postId));
            setPostData(post || {});
        }
    }, [blogData, postId]);

    if (commentsLoading || blogLoading ) {
        return <div>Loading...</div>;
    }

    return (
        <PostDetailView
            commentsData={commentsData}
            userName='anonymous' 
            title={postData.title} 
            body={postData.body}
        />
    );
}
