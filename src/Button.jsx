import clsx from "clsx";

export function Button(props){
    const {className, children} = props;
    const classes =clsx("ui-button", className);

    return (
        <>
            <button className={classes}>{children}</button>
        </>
    )
}