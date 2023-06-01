function alhabetOrder(str){
    
    return str.split('').sort().join('');
    //str.split('') - преобразует строку STR в массив
    //sort() - сортирует элементы массива в алфавитном порядке.
    //join('') - объединяет отсортированные символы обратно в строку

}
document.writeln(alphabetOrder("i made it"));



// Level 2

function findLongestWord(str) {
    
    let words = str.split(' ');
    // Разбиваем строку на отдельные слова

    let longestWord = '';
  // Инициализирует переменную для хранения самого длинного слова
    // Проходим по каждому слову в массиве
    

    //понимаю, что здесь нужен цикл FOR, но не могу понять...
  }
  
  document.writeln(findLongestWord('Web Development In Telran'));