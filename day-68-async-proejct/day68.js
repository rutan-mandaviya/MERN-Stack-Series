var card=document.querySelector(".card")
const searchBtn=document.querySelector(".search")
const userinp=document.querySelector(".usernameinp")

let iferror=`<img src="https://th.bing.com/th/id/OIP.1yoSL-WO0YU5mQKROudvswHaHa?w=158&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="User Avatar"
                class="w-24 h-24 rounded-full border-2 border-blue-500 object-cover" 
                />
            <div class="flex-1 space-y-2">
<p class="text-red-500 mt-2 text-4xl font-semibold animate-bounce">Invalid User Name
<br/></p>
<p class="text-xl font-extrabold text-shadow-white">Re-Enter again with Right username</p>

`
function getuser(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(raw =>{ 
        if(!raw.ok) console.error("ekjdf");
        
        return raw.json()})
    
}

function getRepo(username){
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((res)=>{
        if(!res.ok) throw new Error("User repo Not fount.")
            return res.json()
    })

}
function decorateProfileData(details){
    console.log(details);
    if(details.message==="Not Found") {card.innerHTML=iferror
        return
    } 
    
    let data=`<img src="${details.avatar_url}" alt="User Avatar"
                class="w-24 h-24 rounded-full border-2 border-blue-500 object-cover" />

            <div class="flex-1 space-y-2">
                <h2 class="text-2xl font-semibold">${details.name}</h2>
                <p class="text-gray-400 text-sm">@${details.login}</p>
                <p class="text-sm mt-2 text-gray-300">
                    ${details.bio ? details.bio : "Sorry there is no bio..."}
                </p>

                <div class="flex flex-wrap gap-4 mt-4 text-sm text-gray-300">
                    <div>
                        <span class="font-semibold text-white">Public Repos:</span> ${details.public_repos}
                    </div>
                    <div>
                        <span class="font-semibold text-white">Followers:</span> ${details.followers}
                    </div>
                    <div>
                        <span class="font-semibold text-white">Following:</span> ${details.following}
                    </div>
                    <div>
                        <span class="font-semibold text-white">Location:</span> ${details.location}
                    </div>
                    <div>
                        <span class="font-semibold text-white">Company:</span> ${details.company ? details.company : "Github"}
                    </div>
                    <div>
                        <span class="font-semibold text-white">Blog:</span>
                        <a href="#" class="text-blue-400 hover:underline"
                            target="_blank">${details.blog ?details.blog:"N/A" }</a>
                    </div>
                    <div>

                        <span class="font-semibold text-white">created_at:</span>
                        <a href="#" class="text-blue-400 hover:underline"
                            target="_blank">${details.created_at.substring(0,10)}</a>
                    </div>
                    <div>
          <span class="font-semibold text-white">Visit Profile:</span>
        <a href="${details.html_url}" class="text-blue-400 hover:underline" target="_blank">
             
 ${details.html_url}
        </a>
                </div>
            </div>`

            card.innerHTML=data
}




searchBtn.addEventListener('click',()=>{
   let username=userinp.value.trim()
   
    if(username.length>0){
        getuser(username).then((data)=>decorateProfileData(data));
    }
    else{
        card.innerHTML=iferror
    }
    
})
userinp.addEventListener("keypress", function(e) {
 if (e.key === "Enter") {
     searchBtn.click();
 }
});

let recent = [];


