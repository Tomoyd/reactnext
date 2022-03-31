import React from 'react';
import { useData } from '../hooks/useData';

const Comment = () => {
	const data = useData();

	return <div>Comment {data}</div>;
};

export default Comment;
