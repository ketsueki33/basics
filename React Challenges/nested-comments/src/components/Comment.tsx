import { useEffect, useRef, useState } from "react";
import { CommentInterface } from "./Comments";

interface Props {
    comment: CommentInterface;
    handleDelete: (id: string) => void;
    nestLevel: number;
}

const Comment = ({ comment, handleDelete, nestLevel }: Props) => {
    const [childComments, setChildComments] = useState<CommentInterface[]>(
        comment.childComments || []
    );
    const [showInput, setShowInput] = useState(false);
    const [inputText, setInputText] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChildDelete = (id: string) => {
        setChildComments((prev) => [...prev].filter((e) => e.id !== id));
    };

    const handleAddComment = () => {
        if (inputText.trim()) {
            const newComment: CommentInterface = {
                id: Date.now().toString(),
                text: inputText,
            };
            setChildComments([...childComments, newComment]);
            setInputText("");
            setShowInput(false);
        }
    };

    useEffect(() => {
        if (inputRef) inputRef.current?.focus();
    }, [showInput]);

    return (
        <>
            <div
                className="comment"
                data-nest={nestLevel}
                style={{
                    width: `calc(100% - ${nestLevel * 50}px)`,
                    marginLeft: `${nestLevel * 50}px`,
                }}
            >
                <p>{comment.text}</p>
                {showInput ? (
                    <div className="buttons">
                        <input
                            ref={inputRef}
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <button onClick={handleAddComment}>Add</button>
                        <button onClick={() => setShowInput(false)}>Cancel</button>
                    </div>
                ) : (
                    <div className="buttons">
                        <button onClick={() => setShowInput(true)}>Reply</button>
                        <button onClick={() => handleDelete(comment.id)}>Delete</button>
                    </div>
                )}
            </div>
            <div>
                {childComments?.map((item) => (
                    <Comment
                        key={item.id}
                        comment={item}
                        handleDelete={handleChildDelete}
                        nestLevel={nestLevel + 1}
                    />
                ))}
            </div>
        </>
    );
};
export default Comment;

/*
 <>
            <div
                className="comment"
                data-nest={nestLevel}
                style={{
                    width: `calc(100% - ${nestLevel * 20}px)`,
                    marginLeft: `${nestLevel * 20}px`,
                }}
            >
                <p>{comment.text}</p>
                {showInput ? (
                    <div className="buttons">
                        <input
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                if (inputText.trim()) {
                                    const newComment: CommentInterface = {
                                        id: Date.now().toString(),
                                        text: inputText,
                                    };
                                    setChildComments([...childComments, newComment]);
                                    setInputText("");
                                }
                            }}
                        >
                            Add
                        </button>
                        <button onClick={() => setShowInput(false)}>Cancel</button>
                    </div>
                ) : (
                    <div className="buttons">
                        <button onClick={() => setShowInput(true)}>Reply</button>
                        <button onClick={() => handleDelete(comment.id)}>Delete</button>
                    </div>
                )}
            </div>
            <div>
                {childComments.map((item) => (
                    <Comment
                        key={item.id}
                        comment={item}
                        handleDelete={handleChildDelete}
                        nestLevel={nestLevel + 1}
                    />
                ))}
            </div>
        </>

*/

