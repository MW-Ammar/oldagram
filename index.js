const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]

const mainEl = document.getElementById("main")
let mainHTML = ""

for (let i = 0; i < posts.length; i++) {
    let user = posts[i]
    mainHTML += `<section class="post-container">
                <div class="post-header">
                    <img class="avatar" src="${user.avatar}" alt="${user.name} Avatar">
                    <div class="post-user-info">
                        <h3 class="post-user-name">${user.name}</h3>
                        <p class="post-user-location">${user.location}</p>
                    </div>
                </div>
                <img class="post-img" src="${user.post}" alt="${user.name} self portrait">
                <div class="post-interaction">
                    <div class="btns-container">
                        <button class="btn" onclick="like(${i})">
                            <img id="heart-${i}" class="btn-icon" src="images/icon-heart.png" alt="React Love">
                        </button>
                        <button class="btn">
                            <img class="btn-icon" src="images/icon-comment.png" alt="Leave a comment">
                        </button>
                        <button class="btn">
                            <img class="btn-icon" src="images/icon-dm.png" alt="Send Direct Message">
                        </button>
                    </div>
                    <p class="likes"><span id="${i}-user-likes" class="likes-count">${user.likes}</span> likes</p>
                    <div class="comments-container">
                        <p class="comment"><span class="user-name">${user.username}</span> ${user.comment}</p>
                    </div>
                </div>
            </section>`
}

mainEl.innerHTML = mainHTML

function like(post) {
    const likesCountEl = document.getElementById(`${post}-user-likes`)
    const heartEl = document.getElementById(`heart-${post}`)
    Object.keys(posts[post]).forEach((item) => {
        if(typeof posts[post][item] == "number") {
            if(!posts[post].isLiked) {
                posts[post][item] += 1
                posts[post].isLiked = true
                heartEl.src = "images/icon-heart-red.png"
            } else {
                posts[post][item] -= 1
                posts[post].isLiked = false
                heartEl.src = "images/icon-heart.png"
            }
            likesCountEl.textContent = posts[post][item]
        }
    })
}

