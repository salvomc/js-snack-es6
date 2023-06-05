
const bike = 
[
    {
        name: 'Bianchi',
        weight: 65,
    },
    {
        name: 'Atala',
        weight: 70,
    },
    {
        name: 'Olmo',
        weight: 90,
    },
    {
        name: 'Casati',
        weight: 80,
    },
    {
        name: 'Colnago',
        weight: 95,
    },
    {
        name: 'Bottecchia',
        weight: 100,
    },
    {
        name: 'Cinelli',
        weight: 55,
    },
];

let lighterWeight = bike[0];

bike.forEach(({name, weight}) => 
{
    if (weight < lighterWeight.weight) 
    {
        lighterWeight = {name, weight};
    } 
});

console.log("La bicicletta più leggera è la " + `${lighterWeight.name}` + " . Il suo peso è di " + `${lighterWeight.weight}` + "KG");