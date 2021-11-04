const jwt = require ("jsonwebtoken")
const user = require ("..model/user")
const bcrypt = require ("bcrypt")
const msg = require("../helpers/messages")

const authService = {
    singToken: async (id) =>{
        return jwt.sing({ id }, "My app" , {
            expiresIn: 60 * 60 * 24
        })
    },
    login: async (data)=>{
        try {
            const {email, password} = data
            let userExist = await User.findOne({email:email}, "name email password").exec()
            if(await bcrypt.compare(password, userExists.password).then(res=>res)){
                const token = await this.singToken(userExists.id)
                return {
                    code: 200,
                    token
                }
            }else {
                return msg.authFailed
            }
        } catch (error) {
            return error
        }
    },
    register: async (userData)=>{
        try {
            let hash = await bcrypt.hash(userData.password, 10).then(res => res)
            userData.password = hash
            await userData.save()
            let token = await this.singToken(userData._id)
            return {
                code: 200,
                token
            }
        } catch (error) {
            return error
        }
    }
}

module.exports = authService