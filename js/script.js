console.log('JS OK');


// prendo gli elementi dal dom

const team = document.querySelector('.row');

// creo l'array di oggetti con tutte le info

teammates = [
    {
        image: 'img/wayne-barnett-founder-ceo.jpg',
        fullName: 'Wayne Barnet',
        position: 'Founder & CEO',
    },
    {
        image: 'img/angela-caroll-chief-editor.jpg',
        fullName: 'Angela Caroll',
        position: 'Chief Editor',   
    },
    {
        image: 'img/walter-gordon-office-manager.jpg',
        fullName: 'Walter Gordon',
        position: 'Office Manager',
    },
    {
        image: 'img/angela-lopez-social-media-manager.jpg',
        fullName: 'Angela Lopez',
        position: 'Social Media Manager',   
    },
    {
        image: 'img/scott-estrada-developer.jpg',
        fullName: 'Scott Estrada',
        position: 'Developer',
    },
    {
        image: 'img/barbara-ramos-graphic-designer.jpg',
        fullName: 'Barbara Ramos',
        position: 'Graphic Designer',   
    },
]

// mi preparo la constante

let teamCard = '';

// creo il ciclo
for (let i = 0; i < teammates.length; i++){
    const teammate = teammates[i];
    teamCard += `
    <div class="col col-4 my-3">
        <div class="card">
            <img src="${teammate.image}" class="card-img-top">        
            <div class="card-body">
                <div class="card-text text-center">
                    <h4>${teammate.fullName}</h4>
                    <p>${teammate.position}</p>
                </div>
            </div>
        </div>
    </div>`;
}

// stampo in pagina

team.innerHTML = teamCard;