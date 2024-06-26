const myForm = document.querySelectorAll(".myForm")
const boxOneContainer = document.querySelector('.boxOneConteiner');
document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector('.addBtn');
    addButton.addEventListener('click', function() {
        const htmlToAdd = `
            <div class="boxOne">
                <p>=Link #1</p>
                <p>Platform</p>
                <form class="myForm" action="#">
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
        `;
        boxOneContainer.insertAdjacentHTML('beforeend', htmlToAdd);
    });

    const saveButton = document.querySelector('.save');
    saveButton.addEventListener('click', (e) => {
        const platformElements = document.querySelectorAll('.platform1');
        const inputElements = document.querySelectorAll('.link');

        platformElements.forEach((platformElement, index) => {
            const selectedPlatform = platformElement.value;
            const inputValue = inputElements[index].value;
            localStorage.setItem(`selectedPlatform_${index}`, selectedPlatform);
            localStorage.setItem(`inputValue_${index}`, inputValue);
        });
    });
});
