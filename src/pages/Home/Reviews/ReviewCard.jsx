import React from 'react';

const ReviewCard = ({ review }) => {
    const {user_photoURL, userName, } = review
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="max-w-sm rounded-2xl bg-white px-8 py-6 shadow-sm">
                {/* Quote icon */}
                <div className="text-teal-100 text-4xl leading-none mb-3">“</div>

                {/* Quote text */}
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    {review.review}
                </p>

                {/* Dashed divider */}
                <div className="border-t border-dashed border-teal-200 my-4" />

                {/* Person info */}
                <div className="flex items-center gap-3">
                    <div>
                        <img className='h-10 w-10 rounded-full' src={user_photoURL} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold text-teal-900 text-sm">
                            {userName}
                        </div>
                        <div className="text-xs text-slate-500">
                            Senior Product Designer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;