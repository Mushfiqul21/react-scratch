import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
    const { register, handleSubmit,  formState: { errors }, } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
            <h1 className="text-center">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <input type="text" className="w-full rounded-lg border px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600" placeholder="your@gmail.com" {...register("email", { required: "Email is required", pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
                    }
                    })} /></label>
                     {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password <input className="w-full rounded-lg border px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600" type="password" placeholder="******" {...register("password", {
                        required: "Password is required", minLength: {
                            value: 8,
                            message: "Must be at least 8 characters",
                        }
                    })} /></label>
                     {errors.password ? (
            <p className="text-xs text-red-600 mt-1">
              {errors.password.message}
            </p>
          ) : (
            <p className="text-xs text-gray-400 mt-1">At least 8 characters</p>
          )}
                </div>
                <br />
                <button type='submit' className="w-full mt-2 rounded-lg bg-cyan-700 text-white text-sm font-medium py-2.5 hover:bg-cyan-800 active:scale-[0.98] transition">Submit</button>
            </form>
        </div>
    );
}