import clsx from "clsx";

export function Input(props){
    const {className, ...rest} = props;
    const classes =clsx("ui-textfield", props.className)
    return (
        <>
            <input className={classes} {...rest}></input>
        </>
    )
}