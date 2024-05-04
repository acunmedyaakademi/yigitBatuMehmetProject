





const addBtn = document.querySelector(".addBtn");
const homeContent =document.querySelector(".home-content")


addBtn.addEventListener("click", function(e){
    e.preventDefault();
    homeContent.innerHTML += `
    <div class="boxOne">
    <p>=Link #1</p>
    <p>Platform</p>
    <form action="#">
    <!-- <label for="platform" class="platform">Platform</label> -->
    <select name="" class="platform1" id="platform1">
        <option class="CodePen" value="CodePen"><p><i class="fab fa-codepen"></i>CodePen</p></option>
        <option value="CodeWars">CodeWars</option>
        <option value="Github">Github</option>
        <option value="Instagram">Instagram</option>
        <option value="FaceBook">FaceBook</option>
        <option value="Twitter">Twitter</option>
        <option value="Tinder">Tinder</option>
    </select>
    <br><br>
    <p>Link</p>
    <input class="link" type="value" value="">
    </form>
</div>
    `
})


