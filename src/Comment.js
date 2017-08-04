import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Comment({comment}) {
   return(
       <div>
           <p>{comment.text} <b> by {comment.user}</b></p>
       </div>
   );
}

Comment.prop = {
    comment: PropTypes.shape({
        text: PropTypes.array.isRequired,
        user: PropTypes.number.isRequired
    }).isRequired
};