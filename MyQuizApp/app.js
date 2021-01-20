const quiz = [
    {
        question: '映画テルマエロマエの主演は次のうち誰？',
        answer: [
            '菅田将暉',
            '阿部サダヲ',
            'トムクルーズ',
            '阿部寛'
        ],
        correct: '阿部寛'
    },{
        
        question: '任天堂の作品、赤い帽子の配管工は次のうち誰？',
        answer: [
            'キングテレサ',
            'ハンマーブロス',
            'ピーチ姫',
            'マリオ'
        ],
        correct: 'マリオ'
    
    },{
        
        question: '機関車トーマスの車体の色は？',
        answer: [
            '緑色',
            '青色',
            '橙色',
            '黒色'
        ],
        correct: '青色'
    
    },{
        
        question: 'AKB48のプロデューサーは次のうち誰？',
        answer: [
            '秋元康',
            '山寺宏一',
            '新開誠',
            '秋山竜次'
        ],
        correct: '秋元康'
    
    },{
        
        question: '鬼滅の刃の刀の総称は？',
        answer: [
            '斬魄刀',
            '日輪刀',
            '斬鉄剣',
            '首切り包丁'
        ],
        correct: '日輪刀'
    
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//定数の文字列をHTMLに反映させる
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setUpQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
        buttonIndex++;
    }
}

setUpQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
      }else{
        window.alert('不正解。。')
      }
      quizIndex++;

      if(quizIndex　< quizLength){
          //まだ問題があればこっちを実行
        setUpQuiz();
      }else{
          //もう問題がなければこちらを実行
        window.alert('終了！！！あなたの正解数は' + score + '/' + quizLength + 'です！');
      }
};
//ボタン押したら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
