import s from "./style.module.css"
export function Con (p){

if (p.login){
    return(<div className={s.container}><h1 className={s.txt}>hi welcome to my cite</h1></div>)
}
else if(p.login == false){
     return(<div className={s.container}><h1 className={s.txt}>get out of my site</h1></div>)
}
}


Con.defaultProps = { 
    login:false,
}