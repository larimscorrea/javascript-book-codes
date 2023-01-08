var then = new Date(2010, 0, 1); // O 1º dia do 1º mês de 2010
var later = new Date(
  2010,
  0,
  1, // O mesmo dia, às 5:10:30 da tarde, hora local
  17,
  10,
  30
);
var now = new Date(); // A data e hora atuais
var elapsed = now - then; // Subtração de data: intervalo em milissegundos
later.getFullYear(); // => 2010
later.getMonth(); // => 0: meses com base em zero
later.getDate(); // => 1: dias com base em um
later.getDay(); // => 5: dia da semana. 0 é domingo, 5 é sexta-feira.
later.getHours(); // => 17: 5 da tarde, hora local
later.getUTCHours(); // Horas em UTC; depende do fuso horário
later.toString(); // => "Sexta-feira, 01 de janeiro de 2010, 17:10:30 GMT-0800
// (PST)"
later.toUTCString(); // => "Sábado, 02 de janeiro de 2010, 01:10:30 GMT"
later.toLocaleDateString(); // => "01/01/2010"
later.toLocaleTimeString(); // => "05:10:30 PM"
later.toISOString(); // => "2010-01-02T01:10:30.000Z"; somente ES5

var s = 'hello, world'; // Começa com um texto.
s.charAt(0); // => "h": o primeiro caractere.
s.charAt(s.length - 1); // => "d": o último caractere.
s.substring(1, 4); // => "ell": o 2º, 3º e 4º caracteres.
s.slice(1, 4); // => "ell": a mesma coisa
s.slice(-3); // => "rld": os últimos 3 caracteres
s.indexOf('l'); // => 2: posição da primeira letra l.
s.lastIndexOf('l'); // => 10: posição da última letra l.
s.indexOf('l', 3); // => 3: posição do primeiro "l" em ou após 3
s.split(', '); // => ["hello", "world"] divide em substrings
s.replace('h', 'H'); // => "Hello, world": substitui todas as instâncias
s.toUpperCase(); // => "HELLO, WORLD"

parseInt('3 blind mice'); // => 3
parseFloat(' 3.14 meters'); // => 3.14
parseInt('-12.34'); // => -12
parseInt('0xFF'); // => 255
parseInt('0xff'); // => 255
parseInt('-0XFF'); // => -255
parseFloat('.1'); // => 0.1
parseInt('0.1'); // => 0
parseInt('.1'); // => NaN: inteiros não podem começar com "."
parseFloat('$72.47'); // => NaN: números não podem começar com "$"

var now = new Date(); // Cria um objeto Date
typeof (now + 1); // => "string": + converte datas em strings
typeof (now - 1); // => "number": – usa conversão de objeto para número
now == now.toString(); // => verdadeiro: conversões de string implícitas e explícitas
now > now - 1; // => verdadeiro: > converte um objeto Date em número
