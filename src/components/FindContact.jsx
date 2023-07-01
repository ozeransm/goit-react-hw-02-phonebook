export const FindContact = ({handlerFind})=>{
    return(
        <label htmlFor="find">
            Find contacts by name
            <input name="find" type="text" onChange={handlerFind}/>
        </label>
    )
}