import { getMonth, isExists, getYear, formatDistanceStrict } from 'date-fns';

function doesDateExists(date) {
  if (!date) return;
  const [day, month, year] = date.split('/');
  console.log(date);
  const formattedMonth = Number(month) - 1;
  const formattedDay = Number(day);
  const formattedYear = Number(year);
  const currentYear = getYear(new Date());

  return (
    isExists(formattedYear, formattedMonth, formattedDay) &&
    currentYear >= formattedYear
  );
}

export function calculateAge(dateOfBirth) {
  if (!doesDateExists(dateOfBirth)) {
    return;
  }

  const [day, month, year] = dateOfBirth.split('/'); // captura dia, mês e ano da data informada e salva em variáveis separadas
  const today = new Date().toString(); // captura a data atual e armazena como string
  const currentDate = today.split(' '); // separa cada campo da data (dia, mês) em um array
  const currentDay = currentDate[2]; // a data vem em um array e o dia eh o terceiro elemento do array. capturamos o dia
  const currentMonth = getMonth(new Date()); // pega o mês da data atual
  const formattedCurrentMonth = currentMonth + 1; // o date-fns diminui 1 numero do valor

  const formattedDay = Number(day); // casting para numero, pois o dia vem como uma string
  const formattedMonth = Number(month); // casting para numero, pois o mês vem como uma string

  const currentAge = formatDistanceStrict(
    Date.now(),
    new Date(year, month, day)
  ); // calculando a idade, comparando a data informada com o dia atual

  const [formattedAge] = currentAge.split(' ');

  // se o mês informado for maior que o mês atual, ou for o mesmo mês mas com dia maior, o usuário não fez aniversario ainda
  if (
    (currentDay < formattedDay && formattedMonth === formattedCurrentMonth) ||
    formattedMonth > formattedCurrentMonth
  ) {
    return formattedAge - 1;
  }

  return formattedAge;
}
