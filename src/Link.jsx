import clsx from "clsx";

export function Link(props){

    const {children, className, ...rest} = props;
    const classes =clsx("ui-link", className)

    return (
        <>
            <a className={classes} {...rest}>{props.children}</a>
        </>
    )
}