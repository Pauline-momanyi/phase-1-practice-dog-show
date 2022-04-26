document.addEventListener('DOMContentLoaded', () => {

    function renderDog(dog){
        let trow = document.createElement('tr')
        trow.innerHTML = `
            <td>${dog.name}</td>
            <td>${dog.breed}</td>
            <td>${dog.sex}</td>
            <td><button>Edit</button></td>
        `
        trow.querySelector('button').addEventListener('click',(e)=>{
            console.log('clicked');
            // console.log(e.target.parentElement.parentElement);
            // document.getElementsByName('name').value = e.target.parentElement.
            // document.getElementsByName('breed').value = e.target
            // document.getElementsByName('sex').value = e.target
        })
        
        document.querySelector('#table-body').appendChild(trow)
  
    }
    
    function fetchDog(){
        fetch('http://localhost:3000/dogs')
        .then(resp => resp.json())
        .then(dogData => dogData.forEach(element => {
            renderDog(element)
        }))
    }

    fetchDog()

})