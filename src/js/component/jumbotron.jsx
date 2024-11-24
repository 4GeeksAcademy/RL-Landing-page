import React from "react";

export const Jumbotron = () => {
    return (
        <div className="bg-dark-subtle rounded-3 my-4 position-relative px-3">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-12 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Call to action!
                </button>
            </div>
        </div>
    );
};