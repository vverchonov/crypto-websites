"use client";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyIcon } from "../icons/copy-icon";
import { CA } from "@/app/urls";

type Props = {
    copyLink: string;
};

export const CopyCa = (props: Props) => {
    const onCopy = () => {
        navigator.clipboard.writeText(props.copyLink);
        toast.success("Link copied to clipboard!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    };

    return (
        <button
            onClick={onCopy}
            className="text-center z-50 text-xl cursor-pointer flex flex-row gap-4 align-center select-none">
            CA: {CA}
            <CopyIcon />
        </button>
    );
};
