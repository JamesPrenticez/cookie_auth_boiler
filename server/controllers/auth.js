import User from '../models/user'
import { hashPassword, comparePassword } from '../utils/auth'

export const register = async (req, res) => {
    try {
        //console.log(req.body)
        const {name, email, password} = req.body

        //Name and Password Required Must be 6 Characters long
        if (!name) return res.status(400).send("Name is required")
        if(!password || password.length < 6) {
            return res.status(400).send("Password is required AND should be atleast 6 charaters long.")
        }
        let userExist = await User.findOne({email}).exec()
        if (userExist) return res.status(400).send("Email address already in use.")
  
        //hash password
        const hashedPassword = await hashPassword(password)

        //register
        const user = new User({
            name,
            email,
            password: hashedPassword,
        })
        await user.save()
        //console.log("saved user", user)
        return res.json({ ok: true })

        //Catch errors
    } catch (err) {
        console.log(err)
        return res.status(400).send('Error. Try again')
    }
}