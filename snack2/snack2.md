PROBLEMA: Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

1- Creo un array di oggetti contenente id,nomi e voti;
2- Creo l'array uppercaseStudents contenente solo i nomi dell'array creato precedentemente utilizzando la funzione map;
3- Creo un array contenente gli studenti con voti maggiori di 70 utilizzando la funzione filter;
4- Creo un array contenente gli studenti con voti maggiori di 70 e id superiore di 120 utilizzando la funzione filter;