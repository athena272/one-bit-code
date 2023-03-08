const axios = require('axios')

// axios.get('https://instagram.com/andres.alonnso/channel/?__a=1&__d=dis').then(response => {
//     console.log(response.data)
//     console.log("++++++++++++++++++++++++++++++++++++++")
//     console.log(response.data.graphql.user.biography)
//     console.log("++++++++++++++++++++++++++++++++++++++")
//     console.log(response.data.graphql.user.full_name)
//     console.log("++++++++++++++++++++++++++++++++++++++")

// })

function instaInfo(userName) {
    axios.get(`https://instagram.com/${userName}/channel/?__a=1&__d=dis`).then( response => {
        let user = response.data.graphql.user
        console.log("UserName: " + userName)
        console.log("Nome: " + user.full_name)
        console.log("Bio: " + user.biography)
        console.log("---------------------------------------")
    })
}

instaInfo('andres.alonnso')

instaInfo('zuck')

instaInfo('guigo_rosario')