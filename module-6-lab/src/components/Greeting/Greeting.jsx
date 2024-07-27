export function Greeting(props) {

    return (
        <div>
            {props.children ? <h2>{props.children}</h2> : props.name ? <h2>Hello {props.name}</h2> : <h2>Hello World</h2>}
        </div>
    )
}