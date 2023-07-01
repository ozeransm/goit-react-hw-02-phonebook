import css from './Form.module.css'
export const FormBtn = ({handlerBtn})=>{
    return(
        <button className={css.btnForm} onClick={handlerBtn} type="submit">Add contact</button>
    )
}