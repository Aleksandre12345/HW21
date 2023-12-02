let Input = document.querySelector('input')
let btn = document.querySelector('button')
let username = document.querySelector("h5")
let username1 = document.querySelector("h4")
let joindate = document.querySelector("h3")
let img = document.querySelectorAll(".img")
let bio = document.querySelector (".context")
let repos = document.querySelector(".txt")
let followers = document.querySelector(".txt")
let following = document.querySelector(".txt")
let reposnum = document.querySelector(".num1")
let followernum = document.querySelector(".num2")
let followingnum = document.querySelector(".num3")
let adgili = document.querySelector(".locationicon")
let url = document.querySelector(".url")
let twitter = document.querySelector(".twitter")
let building = document.querySelector(".building")
let sanfarncisco = document.querySelector(".txt1")
let githublink = document.querySelector(".txt2")
let notavailable = document.querySelector(".txt3")
let buildinggithub = document.querySelector(".txt4")



async function getData() {
    Input.placeholder = 'Loading ...'
    btn.setAttribute('disabled',true)
    try {
        let res = await fetch(`https://api.github.com/users/${Input.value}`)
        let data = await res.json()
        btn.removeAttribute('disabled')
        Input.value = ""
        if(data.message!=="Not Found"){
            username.textContent = data.name
            img[0].src = data.avatar_url
            img[1].src = data.avatar_url
            username1.innerHTML = "@" + data.login
            let date = data.created_at
            let year = date.slice(0, 4)
            let month = date.slice(5, 7)
            let day = date.slice(8, 10)
            let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            let monthbasedonday = monthName[parseInt(month) - 1]
            joindate.textContent = "Joined " + day + " " + monthbasedonday + " " + year
            if (data.bio === null) {
                bio.innerHTML = "No Bio Yet" 
            } else {
                bio.innerHTML = data.bio
            }
            reposnum.innerHTML = data.public_repos
            followernum.innerHTML = data.followers
            followingnum.innerHTML = data.following

            sanfarncisco.textContent = data.location === null ? 'Not available' : data.location;
            githublink.textContent = data.blog === "" ? 'Not available' : data.blog;
            notavailable.textContent = data.twitter_username === null ? 'Not available' : data.twitter_username;
            buildinggithub.textContent = data.company === null ? 'Not available' : data.company;
        }
    } catch {
    }
}
btn.addEventListener ('click',() => {
    getData()
})