document.addEventListener("keyup", e=>{
    if(e.target.matches("#search")){
         document.querySelectorAll(".productos-items").forEach(funko => {
           funko.textContent.toLocaleLowerCase().includes(e.target.value)
            ?funko.classList.remove("filtro")
            :funko.classList.add("filtro")
                           
    });
    if (e.key === "escape"){
        e.target.value="";
    }
}
})