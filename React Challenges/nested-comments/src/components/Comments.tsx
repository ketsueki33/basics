import { useState } from "react";
import Comment from "./Comment";

export interface CommentInterface {
    id: string;
    text: string;
    childComments?: CommentInterface[];
}

const initialState: CommentInterface[] = [
    {
        id: "1",
        text: "This is a root comment about React development",
        childComments: [
            {
                id: "1.1",
                text: "Great point! Can you elaborate on state management?",
                childComments: [
                    {
                        id: "1.1.1",
                        text: "I recommend using React hooks for cleaner state management",
                    },
                ],
            },
            {
                id: "1.2",
                text: "I've been working on a similar project",
            },
        ],
    },
    {
        id: "2",
        text: "Another top-level comment about frontend technologies",
        childComments: [
            {
                id: "2.1",
                text: "What are your thoughts on TypeScript?",
            },
        ],
    },
];

const Comments = () => {
    const [comments, setComments] = useState<CommentInterface[]>(initialState);
    const [inputText, setInputText] = useState<string>("");

    const handleDelete = (id: string) => {
        setComments((prev) => [...prev].filter((e) => e.id !== id));
    };

    return (
        <>
            <form
                noValidate
                onSubmit={(e) => {
                    e.preventDefault();
                    if (inputText.trim()) {
                        const newComment: CommentInterface = {
                            id: Date.now().toString(),
                            text: inputText,
                        };
                        setComments([...comments, newComment]);
                        setInputText("");
                    }
                }}
            >
                <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <div className="container">
                {comments.map((item) => (
                    <Comment
                        key={item.id}
                        comment={item}
                        handleDelete={handleDelete}
                        nestLevel={0}
                    />
                ))}
            </div>
        </>
    );
};
export default Comments;
