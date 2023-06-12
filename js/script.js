console.log('JS OK');


// prendo gli elementi dal dom

const team = document.querySelector('col col-4 py-3');

// creo l'array di oggetti con tutte le info

teammates = [
    {
        fullName: 'Wayne Barnet',
        position: 'Founder & CEO',
    },
    {
        fullName: 'Angela Carolt',
        position: 'Chief Editor',   
    },
    {
        fullName: 'Walter Gordon',
        position: 'Office Manager',
    },
    {
        fullName: 'Angela Lopez',
        position: 'Social Media Manager',   
    },
    {
        fullName: 'Scott Estrada',
        position: 'Developer',
    },
    {
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
    <div class="card">
        <div class="card-body">
            <div class="card-text text-center">
                <h4>fullname: ${teammate.fullName}</h4>
                <p>position: ${teammate.position}</p>
            </div>
        </div>
    </div>`;
}

// stampo in pagina

team.innerHTML = teamCard;