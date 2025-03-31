
// Node modules
import React from "react";

// Components
import Profile from "./Profile";


const Review = () => {

    return (
        <section
        id="profiles"
        className="section overflow-hidden">
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                Coding Profiles
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[500ch] reveal-up">
                    I love solving coding challenges and improving my problem-solving skills. Check out my profiles on different platforms where I practice and compete in programming contests.
                </p>

                <div>
                  <Profile />
                </div>

            </div>
        </section>
    );
}

export default Review;