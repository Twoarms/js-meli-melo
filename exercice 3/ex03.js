const nom = document.getElementById(`nom`);

nom.addEventListener(`keypress`, function(){
    let press = nom.value;
    alert(`${press}`);
});