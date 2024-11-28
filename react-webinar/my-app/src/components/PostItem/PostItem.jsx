import React, { useState } from "react";

/*
props - входные данные. Аргумент функции, куда можно передавать что-то извне.
*/

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>

            <div className="post__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
}

export default PostItem;