
const students = 
[
    { 
        'id': '213',
        'name': 'Marco della Rovere',
        'grades': '78',
    },
    
    { 
        'id': '110',
        'name': 'Paola Cortellesa',
        'grades': '96',
    },
    
    { 
        'id': '250',
        'name': 'Andrea Mantegna',
        'grades': '48',
    },
    
    { 
        'id': '145',
        'name': 'Gaia Borromini',
        'grades': '74',
    },
    
    { 
        'id': '196',
        'name': 'Luigi Grimaldello',
        'grades': '68',
    },
    
    { 
        'id': '102',
        'name': 'Piero della Francesca',
        'grades': '50',
    },
    
    { 
        'id': '120',
        'name': 'Francesca della Polenta',
        'grades': '84',
    },
];

const uppercaseStudents = students.map((item) => 
{
    let studentsName = item.name.toUpperCase();
    return studentsName;
});
for (let i = 0; i < uppercaseStudents.length; i++) 
{
    console.log(uppercaseStudents[i]);
}


const grades70Plus = students.filter((item) => 
{
    if(item.grades > '70') return true;
});
for (let i = 0; i < grades70Plus.length; i++) 
{
    console.log(grades70Plus[i]);
}


const gradesAndIdPlus = students.filter((item) => 
{
    if(item.grades > '70' && item.id > '120') return true;
});
for (let i = 0; i < gradesAndIdPlus.length; i++) 
{
    console.log(gradesAndIdPlus[i]);
}