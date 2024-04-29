export const BigText = (props: any) => {
    return (
        <div className="relative">
            <p className={"text-5xl text-black relative " + props.customClass}>
                {props.text}
            </p>
            {props.extra}
        </div>
    );
};
