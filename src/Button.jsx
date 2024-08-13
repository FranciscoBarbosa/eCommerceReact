import clsx from "clsx";

export function Button(props){
    const {className, children, ...rest} = props;
    const classes =clsx("ui-button", className);

    return (
        <>
            <button className={classes} {...rest}>{children}</button>
        </>
    )
}