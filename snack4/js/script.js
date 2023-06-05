
const teams = 
[
    {
        name: 'Milan',
        points: 0,
        foulsDrawn: 0,
    },
    {
        name: 'Inter',
        points: 0,
        foulsDrawn: 0,
    },
    {
        name: 'Juventus',
        points: 0,
        foulsDrawn: 0,
    },
    {
        name: 'Napoli',
        points: 0,
        foulsDrawn: 0,
    },
    {
        name: 'Roma',
        points: 0,
        foulsDrawn: 0,
    },
    {
        name: 'Lazio',
        points: 0,
        foulsDrawn: 0,
    },
    {
        name: 'Atalanta',
        points: 0,
        foulsDrawn: 0,
    }
];

//Creo la funzione per generare un numero random compreso tra 1 e 90


// Creo un ciclo forEach per inserire i numeri random nelle proprieta' points e foulsDrawn

teams.forEach(team => 
{
    team.points = Math.floor(Math.random() * (90 - 1 + 1) + 1);
    team.foulsDrawn = Math.floor(Math.random() * (90 - 1 + 1) + 1);
});

// Creo un nuovo array con il destructuring con solo gli elementi name e foulsDrawn
const updatedTeams = teams.map(({name, foulsDrawn}) => ({name, foulsDrawn}));

// Visualizzo il tutto in console
console.log(updatedTeams);

