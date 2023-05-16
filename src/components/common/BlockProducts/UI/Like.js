import React from 'react';

const Like = ({className,setLiked,liked}) => {
    const selectLike=(e)=>{
        e.preventDefault()
        setLiked(!liked)
    }

    return (
        
        <svg onClick={e=>selectLike(e)} className={className} width="26" height="24" viewBox="-1 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3.43498C10.011 -1.96402 0 -1.16202 0 7.00298C0 11.071 3.06 16.484 12 22C20.94 16.484 24 11.071 24 7.00298C24 -1.11502 14 -1.99602 12 3.43498Z"  stroke-width="1.2" stroke='black' fill="none"/>
        </svg>
        
    );
};

export default Like;