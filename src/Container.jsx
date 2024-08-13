import clsx from "clsx";

export function Container(props){
    const {className, children} = props;
    const classes =clsx("ui-container", className)

    return (
        <div className={classes}>{children}</div>
    )
}