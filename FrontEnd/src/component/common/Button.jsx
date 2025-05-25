export default function Button({children, onClick}){
    return(
        <button className="" onClick={() => {console.log(onClick)}}>{children}</button>
    )
}