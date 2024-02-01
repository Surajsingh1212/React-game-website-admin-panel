const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())
app.post('/signup', async (req, res) => {
    try {
        const {
            Name,
            Email,
            Mobile,
            Password,
            CPassword,
            RCode,
            agreementChecked,
            promotionsChecked,
        } = req.body

        if (!Name || !Email || !Mobile || !Password || !CPassword) {
            console.log("Please Fill The All Fields ");
        }
        const userSignup = await axios.post('https://mrxapi.fuelinfotech.com/api/Members/signUp',{
            ReferralCode: RCode,
            FullName : Name,
            Email,
            Mobile,
            Password,
            ConfirmPassword : CPassword,
            TransPassword: null,
            Longitude: '123',
            Latitude: '23312',
            IPAddress: '1232313',
            MacAddress: '231123',
        })
        const {StatusCode,status,statusText} = userSignup.data
        if (StatusCode===1){
            res.json({success:true,message:"Signup Successful",data:userSignup.data})
        }
        else{
            res.status(400).json({error:'Signup Failed',status,statusText})
        }
    }
    catch (error) {
        console.log("Signup Error", error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.listen(port, () => {
    console.log(`Server Running On Port http://localhost:${port}/`)
})