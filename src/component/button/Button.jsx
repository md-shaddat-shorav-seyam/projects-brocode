import styl from './Button.module.css'
export function Button(pro){
    return (<>
    <button className={styl.button} type="button">click me   {pro.name}</button>
    </>);
}