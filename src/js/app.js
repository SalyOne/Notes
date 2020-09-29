(function(){
    const siblings = n => [...n.parentNode.children].filter(v => n !== v);


    let titleListItem = document.querySelectorAll(".title-list li");
    let time = new Date();


    const mainobject = {};
    let add = document.querySelectorAll(".settings-container .add")[0];
    let remove = document.querySelectorAll(".settings-container .delete")[0];
    let titleList = document.querySelector(".title-list ");
    let bodyList = document.querySelector(".body-list");

    titleList.addEventListener("click", item=>{
        let targetElement = item.target;
        let selector = ".title-list-item";
        while(targetElement !== titleList) {
            if (targetElement.matches(selector)) {
                let eachItem = item.target.closest(`${selector}`);
                let hour = eachItem.querySelector(".hour").innerText = time.getHours();
                let minutes = eachItem.querySelector(".minute").innerHTML = time.getMinutes();

                if (!eachItem.classList.contains("active")) {

                    eachItem.classList.add("active");
                    let index = eachItem.getAttribute("data-title-index");
                    let bodyItem = document.querySelector(`.body-list-item[data-body-index="${index}"]`);
                    bodyItem.classList.add("active");


                    let siblingsArrayBody = siblings(bodyItem);
                    siblingsArrayBody.forEach(eachSibling => {
                        if (eachSibling.classList.contains("active")) {
                            eachSibling.classList.remove("active");
                        }
                    })

                    let siblingsArray = siblings(eachItem);
                    siblingsArray.forEach(eachSibling => {
                        if (eachSibling.classList.contains("active")) {
                            eachSibling.classList.remove("active");
                        }
                    })
                }
                return;
            }
            targetElement = targetElement.parentElement;
        }

    })

    bodyList.addEventListener("input", item=>{
            let targetElement = item.target;
            let selector = ".body-text";
            while(targetElement !== bodyList) {
                if(targetElement.matches(selector)) {
                    let eachItem = item.target.closest(`${selector}`);
                       let index = eachItem.closest('.body-list-item').getAttribute('data-body-index');
                    let titleItem = document.querySelector(`.title-list-item[data-title-index="${index}"]`);
                    let value = eachItem.value;
                    if(value.length < 10){
                        titleItem.querySelector(".title").innerHTML = value;
                    }
                    return;
                }
                targetElement = targetElement.parentElement;
            }
        })



    let i=0;
    let y =0;
    add.addEventListener("click", item=>{
        var titleLi = document.createElement("li");
        titleLi.innerHTML = `
                <div class="time-container"><span class="hour">-- </span>: <span class="minute">-- </span></div>
                <h2 class="title">untitled</h2>
        `;
        titleLi.setAttribute("data-title-index", ++i );
        titleLi.classList.add("title-list-item");
        titleList.appendChild(titleLi);

        var bodyLi = document.createElement("li");
        bodyLi.innerHTML = `
                <div class="content-container">
                    <form action="">
                        <textarea class="body-text" name="text"></textarea>
                    </form>
                </div>`;
        bodyLi.setAttribute("data-body-index", ++y );
        bodyLi.classList.add("body-list-item");
        bodyList.appendChild(bodyLi);

    });
    remove.addEventListener('click', item=>{

        let toRemovetitle = document.querySelector(".title-list-item.active");
        let toRemovebody = document.querySelector(".body-list-item.active");
        if(toRemovetitle != "undefined" && toRemovebody != "undefined"){
            toRemovetitle.parentNode.removeChild(toRemovetitle);
            toRemovebody.parentNode.removeChild(toRemovebody)
        }
    })
})();