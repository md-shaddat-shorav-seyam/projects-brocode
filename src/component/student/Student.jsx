import s from "./student.module.css"
export function Student(p){
    return(<div className={s.student}>
       <p>hi mr {p.name}</p>
       <p>your age is {p.age}</p>
       <p>is student {p.isStudent == true ? "yes":"no"} </p>
    </div>);
}