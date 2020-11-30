//要素の取得
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');

//複数のテキストを格納数する配列
const textLists = [
    'Hello World','This is my App','How are you?',
    'Today is sunny','I love JavaScript!','Good morning',
    'I am Japanese','Let it be','Samurai',
    'Typing Game','Information Technology',
    'I want to be a programmer','What day is today?',
    'I want to build a web app','Nice to meet you',
    'Chrome Firefox Edge Safari','machine learning',
    'Brendan Eich','John Resig','React Vue Angular',
    'Netscape Communications','undefined null NaN',
    'Thank you very much','Google Apple Facebook Amazon',
    'ECMAScript','console.log','for while if switch',
    'var let const','Windows Mac Linux iOS Android',
    'programming'
  ];
//ランダムなテキストを画面に表示する


let checkTexts = [];

const createText = () => {
    const p = document.getElementById('text');
    const rnd = Math.floor(Math.random() * textLists.length);

    //p要素の中身を空っぽにする
    p.textContent = '';

    //textLists[rnd].split('').map( string => {
    checkTexts = textLists[rnd].split('').map( string => {
        //span要素を作る
        const span = document.createElement('span');

        //span要素の配列に１文字ずつ割り当てる
        span.textContent = string;
        //span要素をp要素に追加していく
        p.appendChild(span);
        //p.appendChild(string);
    
        //1文字ずつcheckTextsに格納していく
        return span;

 
    })
};

//スコアの初期値を設定
let score = 0;

//キーイベント＆入力判定処理
const keyDown = e => {
    //console.log(e.key);
    //console.log(checkTexts);
    //console.log(checkTexts[0]);

    if( e.key === checkTexts[0].textContent){

        wrap.style.backgroundColor = '#666';
        //checkTextsの要素にadd-colorクラスを付与する
        checkTexts[0].className = 'add-color';
        //配列から１文字削除
        checkTexts.shift();

        score ++;
        //最後まで入力したら、新しいテキストを表示
        if( !checkTexts.length) createText();

    }else if( e.key === 'Shift'){
        wrap.style.backgroundColor = '#666';
    }else{
        wrap.style.backgroundColor = 'red';
    }
};

//ランク判定
const rankCheck = rank =>{
    //テキストを格納する変数
    let text = '';

    //スコアに応じて異なるメッセージを変数textに格納
    if( score < 100 ){ 
        text = ` Your Rank is C  \n ${100 - socre }more to B Rank`;
    }else if( score < 200 ){
        text = `Your Rank is B \n${200-score} more to A Rank`;
    }else if( score < 300 ){
        text = `Your Rank is A \n${300-socre} more to S Rank`;
    }else if( score >= 300){
        text = `Your Rank is S! \n Great Work!`
    }


    return `${score}文字打てました！ \n${text}\n 1.<OK> for Retry / 2.<Cancel> for Exit`;

};


//ゲームの終了処理
const gameOver = id =>{

    clearInterval(id);
    //console.log('Game over');

    //スコアの値をrankCheck()に渡す
    const result = confirm(rankCheck(score));

    //okボタン押されたらリロード
    if( result ) window.location.reload();
};

// タイマー処理
const timer = () => {
//タイマーの初期値を設定
let time = 60;

    const count = document.getElementById('count');
    const id = setInterval( ()=>{
        //カウント0でタイマー停止
        //if( time <= 0 ) clearInterval(id);
        if( time <= 0) gameOver(id);
        //カウントダウン
        count.textContent = time--;
    },1000);
}; 

start.addEventListener('click', ()=>{
    //timer関数
    timer();

    createText();

    //スタートボタンを非表示に
    start.style.display = 'none';

    document.addEventListener( 'keydown', keyDown);

} )






