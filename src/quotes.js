const quotes = [
  {
    quote: '감사의 표시는 돈으로 하라',
  },
  {
    quote: '참을 인 세 번이면 호구된다.',
  },
  {
    quote: '인생은 한방이 아니다.',
  },
  {
    quote: '시작은 반이 아니다. 시작은 시작일뿐이다.',
  },
  {
    quote: '개천에서 용 난 사람 만나면 개천으로 빨려 들어간다.',
  },
  {
    quote: '늦었다고 생각할 때가 정말 늦은 거다.',
  },
  {
    quote: '하나를 보고 열을 알면 무당',
  },
  {
    quote: '원수는 회사에서 만난다.',
  },
  {
    quote: '내일도 할 수 있는 일을 굳이 오늘 할 필요없다.',
  },
];

const quote = document.querySelector('#quote span');

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;