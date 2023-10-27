import bcrypt from 'bcrypt'

export function BcryptHashPassword(text){
    bcrypt.hash(text, 12, (err, hash)=> {
        if(err){
            console.log('Error creating password')
        }
        return hash
    })
    return ""
}


export async function BcryptValidatePassword(enteredPassword, password){
    const isValid = await bcrypt.compare(enteredPassword, password);
    return isValid
}